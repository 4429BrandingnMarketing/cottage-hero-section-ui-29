import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableTVPortfolioRow } from './SortableTVPortfolioRow';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  year: string;
  image_url: string;
  video_url: string | null;
  aspect: string;
  order_index: number;
}

const aspectOptions = [
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-2',
  'col-span-2 row-span-2',
];

const AdminTVContent = () => {
  const { toast } = useToast();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [editing, setEditing] = useState<PortfolioItem | null>(null);
  const [newItem, setNewItem] = useState({
    title: '', category: '', year: new Date().getFullYear().toString(),
    image_url: '', video_url: '', aspect: 'col-span-1 row-span-1',
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    const { data } = await supabase.from('tv_portfolio').select('*').order('order_index');
    if (data) setPortfolio(data);
  };

  const addItem = async () => {
    const { error } = await supabase.from('tv_portfolio').insert([{
      ...newItem,
      video_url: newItem.video_url || null,
      order_index: portfolio.length,
    }]);
    if (error) {
      toast({ title: 'Error', description: 'Failed to add portfolio item', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Portfolio item added' });
      setNewItem({ title: '', category: '', year: new Date().getFullYear().toString(), image_url: '', video_url: '', aspect: 'col-span-1 row-span-1' });
      fetchData();
    }
  };

  const updateItem = async (item: PortfolioItem) => {
    const { error } = await supabase.from('tv_portfolio').update(item).eq('id', item.id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to update', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Updated' });
      setEditing(null);
      fetchData();
    }
  };

  const deleteItem = async (id: string) => {
    const { error } = await supabase.from('tv_portfolio').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Deleted' });
      fetchData();
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = portfolio.findIndex((p) => p.id === active.id);
    const newIndex = portfolio.findIndex((p) => p.id === over.id);
    const newOrder = arrayMove(portfolio, oldIndex, newIndex);
    setPortfolio(newOrder);

    await Promise.all(
      newOrder.map((item, index) =>
        supabase.from('tv_portfolio').update({ order_index: index }).eq('id', item.id)
      )
    );
    toast({ title: 'Order updated' });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">TV Division Content</h2>

      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Add Portfolio Item</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Title</Label>
                  <Input value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} placeholder="Project title" />
                </div>
                <div>
                  <Label>Category</Label>
                  <Input value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} placeholder="e.g. Music Video" />
                </div>
                <div>
                  <Label>Year</Label>
                  <Input value={newItem.year} onChange={(e) => setNewItem({ ...newItem, year: e.target.value })} placeholder="2025" />
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input value={newItem.image_url} onChange={(e) => setNewItem({ ...newItem, image_url: e.target.value })} placeholder="https://..." />
                </div>
                <div>
                  <Label>Video URL (optional)</Label>
                  <Input value={newItem.video_url} onChange={(e) => setNewItem({ ...newItem, video_url: e.target.value })} placeholder="https://youtube.com/embed/..." />
                </div>
                <div>
                  <Label>Grid Size</Label>
                  <Select value={newItem.aspect} onValueChange={(val) => setNewItem({ ...newItem, aspect: val })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {aspectOptions.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={addItem}><Plus className="w-4 h-4 mr-2" />Add Item</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Portfolio Items</CardTitle></CardHeader>
            <CardContent>
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead>Video</TableHead>
                      <TableHead>Grid Size</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <SortableContext items={portfolio.map(p => p.id)} strategy={verticalListSortingStrategy}>
                      {portfolio.map((item) => (
                        <SortableTVPortfolioRow
                          key={item.id}
                          item={item}
                          isEditing={editing?.id === item.id}
                          editingData={editing}
                          onEditStart={() => setEditing(item)}
                          onEditChange={setEditing}
                          onSave={() => editing && updateItem(editing)}
                          onCancel={() => setEditing(null)}
                          onDelete={() => deleteItem(item.id)}
                        />
                      ))}
                    </SortableContext>
                  </TableBody>
                </Table>
              </DndContext>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminTVContent;
