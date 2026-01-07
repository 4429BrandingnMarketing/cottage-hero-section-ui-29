import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableRadioServiceRow } from './SortableRadioServiceRow';
import { SortableRadioStatRow } from './SortableRadioStatRow';

const iconOptions = ['Podcast', 'Radio', 'Mic', 'Share2', 'Headphones', 'Music'];

interface RadioService {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

interface RadioStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

const AdminRadioContent = () => {
  const { toast } = useToast();

  const [services, setServices] = useState<RadioService[]>([]);
  const [stats, setStats] = useState<RadioStat[]>([]);

  const [editingService, setEditingService] = useState<RadioService | null>(null);
  const [editingStat, setEditingStat] = useState<RadioStat | null>(null);

  const [newService, setNewService] = useState({ title: '', description: '', icon: 'Radio' });
  const [newStat, setNewStat] = useState({ value: '', label: '' });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const [servicesRes, statsRes] = await Promise.all([
      supabase.from('radio_services').select('*').order('order_index'),
      supabase.from('radio_stats').select('*').order('order_index'),
    ]);

    if (servicesRes.data) setServices(servicesRes.data);
    if (statsRes.data) setStats(statsRes.data);
  };

  // Services CRUD
  const addService = async () => {
    const { error } = await supabase.from('radio_services').insert([{
      ...newService,
      order_index: services.length,
    }]);
    if (error) {
      toast({ title: 'Error', description: 'Failed to add service', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Service added' });
      setNewService({ title: '', description: '', icon: 'Radio' });
      fetchAllData();
    }
  };

  const updateService = async (service: RadioService) => {
    const { error } = await supabase.from('radio_services').update(service).eq('id', service.id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to update service', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Service updated' });
      setEditingService(null);
      fetchAllData();
    }
  };

  const deleteService = async (id: string) => {
    const { error } = await supabase.from('radio_services').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to delete service', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Service deleted' });
      fetchAllData();
    }
  };

  // Stats CRUD
  const addStat = async () => {
    const { error } = await supabase.from('radio_stats').insert([{
      ...newStat,
      order_index: stats.length,
    }]);
    if (error) {
      toast({ title: 'Error', description: 'Failed to add stat', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Stat added' });
      setNewStat({ value: '', label: '' });
      fetchAllData();
    }
  };

  const updateStat = async (stat: RadioStat) => {
    const { error } = await supabase.from('radio_stats').update(stat).eq('id', stat.id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to update stat', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Stat updated' });
      setEditingStat(null);
      fetchAllData();
    }
  };

  const deleteStat = async (id: string) => {
    const { error } = await supabase.from('radio_stats').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to delete stat', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Stat deleted' });
      fetchAllData();
    }
  };

  // Drag and drop handlers
  const handleServiceDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = services.findIndex((s) => s.id === active.id);
    const newIndex = services.findIndex((s) => s.id === over.id);
    const newOrder = arrayMove(services, oldIndex, newIndex);
    setServices(newOrder);

    const updates = newOrder.map((item, index) =>
      supabase.from('radio_services').update({ order_index: index }).eq('id', item.id)
    );
    await Promise.all(updates);
    toast({ title: 'Order updated' });
  };

  const handleStatDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = stats.findIndex((s) => s.id === active.id);
    const newIndex = stats.findIndex((s) => s.id === over.id);
    const newOrder = arrayMove(stats, oldIndex, newIndex);
    setStats(newOrder);

    const updates = newOrder.map((item, index) =>
      supabase.from('radio_stats').update({ order_index: index }).eq('id', item.id)
    );
    await Promise.all(updates);
    toast({ title: 'Order updated' });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">Radio Division Content</h2>

      <Tabs defaultValue="services" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
        </TabsList>

        {/* Services Tab */}
        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={newService.title}
                    onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                  />
                </div>
                <div className="col-span-2">
                  <Label>Description</Label>
                  <Textarea
                    value={newService.description}
                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                    rows={1}
                  />
                </div>
                <div>
                  <Label>Icon</Label>
                  <Select value={newService.icon} onValueChange={(val) => setNewService({ ...newService, icon: val })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {iconOptions.map((icon) => (
                        <SelectItem key={icon} value={icon}>{icon}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={addService}><Plus className="w-4 h-4 mr-2" />Add Service</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Services</CardTitle></CardHeader>
            <CardContent>
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleServiceDragEnd}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Icon</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <SortableContext items={services.map(s => s.id)} strategy={verticalListSortingStrategy}>
                      {services.map((service) => (
                        <SortableRadioServiceRow
                          key={service.id}
                          service={service}
                          isEditing={editingService?.id === service.id}
                          editingData={editingService}
                          onEditStart={() => setEditingService(service)}
                          onEditChange={setEditingService}
                          onSave={() => editingService && updateService(editingService)}
                          onCancel={() => setEditingService(null)}
                          onDelete={() => deleteService(service.id)}
                        />
                      ))}
                    </SortableContext>
                  </TableBody>
                </Table>
              </DndContext>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Stats Tab */}
        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Add Stat</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Value</Label>
                  <Input value={newStat.value} onChange={(e) => setNewStat({ ...newStat, value: e.target.value })} placeholder="e.g. 200+" />
                </div>
                <div>
                  <Label>Label</Label>
                  <Input value={newStat.label} onChange={(e) => setNewStat({ ...newStat, label: e.target.value })} placeholder="e.g. Podcasts" />
                </div>
                <div className="flex items-end">
                  <Button onClick={addStat}><Plus className="w-4 h-4 mr-2" />Add Stat</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Stats</CardTitle></CardHeader>
            <CardContent>
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleStatDragEnd}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Label</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <SortableContext items={stats.map(s => s.id)} strategy={verticalListSortingStrategy}>
                      {stats.map((stat) => (
                        <SortableRadioStatRow
                          key={stat.id}
                          stat={stat}
                          isEditing={editingStat?.id === stat.id}
                          editingData={editingStat}
                          onEditStart={() => setEditingStat(stat)}
                          onEditChange={setEditingStat}
                          onSave={() => editingStat && updateStat(editingStat)}
                          onCancel={() => setEditingStat(null)}
                          onDelete={() => deleteStat(stat.id)}
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

export default AdminRadioContent;
