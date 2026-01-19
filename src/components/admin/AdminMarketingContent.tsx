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
import { SortableMarketingServiceRow } from './SortableMarketingServiceRow';
import { SortableMarketingStatRow } from './SortableMarketingStatRow';
import { SortableMarketingBenefitRow } from './SortableMarketingBenefitRow';

const iconOptions = ['Target', 'TrendingUp', 'Globe', 'BarChart3', 'Megaphone', 'Users'];

interface MarketingService {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

interface MarketingStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

interface MarketingBenefit {
  id: string;
  benefit: string;
  order_index: number;
  link: string | null;
}

const AdminMarketingContent = () => {
  const { toast } = useToast();

  const [services, setServices] = useState<MarketingService[]>([]);
  const [stats, setStats] = useState<MarketingStat[]>([]);
  const [benefits, setBenefits] = useState<MarketingBenefit[]>([]);

  const [editingService, setEditingService] = useState<MarketingService | null>(null);
  const [editingStat, setEditingStat] = useState<MarketingStat | null>(null);
  const [editingBenefit, setEditingBenefit] = useState<MarketingBenefit | null>(null);

  const [newService, setNewService] = useState({ title: '', description: '', icon: 'Target' });
  const [newStat, setNewStat] = useState({ value: '', label: '' });
  const [newBenefit, setNewBenefit] = useState({ benefit: '', link: '' });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const [servicesRes, statsRes, benefitsRes] = await Promise.all([
      supabase.from('marketing_services').select('*').order('order_index'),
      supabase.from('marketing_stats').select('*').order('order_index'),
      supabase.from('marketing_benefits').select('*').order('order_index'),
    ]);

    if (servicesRes.data) setServices(servicesRes.data);
    if (statsRes.data) setStats(statsRes.data);
    if (benefitsRes.data) setBenefits(benefitsRes.data);
  };

  // Services CRUD
  const addService = async () => {
    const { error } = await supabase.from('marketing_services').insert([{
      ...newService,
      order_index: services.length,
    }]);
    if (error) {
      toast({ title: 'Error', description: 'Failed to add service', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Service added' });
      setNewService({ title: '', description: '', icon: 'Target' });
      fetchAllData();
    }
  };

  const updateService = async (service: MarketingService) => {
    const { error } = await supabase.from('marketing_services').update(service).eq('id', service.id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to update service', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Service updated' });
      setEditingService(null);
      fetchAllData();
    }
  };

  const deleteService = async (id: string) => {
    const { error } = await supabase.from('marketing_services').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to delete service', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Service deleted' });
      fetchAllData();
    }
  };

  // Stats CRUD
  const addStat = async () => {
    const { error } = await supabase.from('marketing_stats').insert([{
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

  const updateStat = async (stat: MarketingStat) => {
    const { error } = await supabase.from('marketing_stats').update(stat).eq('id', stat.id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to update stat', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Stat updated' });
      setEditingStat(null);
      fetchAllData();
    }
  };

  const deleteStat = async (id: string) => {
    const { error } = await supabase.from('marketing_stats').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to delete stat', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Stat deleted' });
      fetchAllData();
    }
  };

  // Benefits CRUD
  const addBenefit = async () => {
    const { error } = await supabase.from('marketing_benefits').insert([{
      benefit: newBenefit.benefit,
      link: newBenefit.link || null,
      order_index: benefits.length,
    }]);
    if (error) {
      toast({ title: 'Error', description: 'Failed to add benefit', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Benefit added' });
      setNewBenefit({ benefit: '', link: '' });
      fetchAllData();
    }
  };

  const updateBenefit = async (benefit: MarketingBenefit) => {
    const { error } = await supabase.from('marketing_benefits').update(benefit).eq('id', benefit.id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to update benefit', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Benefit updated' });
      setEditingBenefit(null);
      fetchAllData();
    }
  };

  const deleteBenefit = async (id: string) => {
    const { error } = await supabase.from('marketing_benefits').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: 'Failed to delete benefit', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Benefit deleted' });
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
      supabase.from('marketing_services').update({ order_index: index }).eq('id', item.id)
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
      supabase.from('marketing_stats').update({ order_index: index }).eq('id', item.id)
    );
    await Promise.all(updates);
    toast({ title: 'Order updated' });
  };

  const handleBenefitDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = benefits.findIndex((b) => b.id === active.id);
    const newIndex = benefits.findIndex((b) => b.id === over.id);
    const newOrder = arrayMove(benefits, oldIndex, newIndex);
    setBenefits(newOrder);

    const updates = newOrder.map((item, index) =>
      supabase.from('marketing_benefits').update({ order_index: index }).eq('id', item.id)
    );
    await Promise.all(updates);
    toast({ title: 'Order updated' });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">4429 Marketing Agency Content</h2>

      <Tabs defaultValue="services" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
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
                        <SortableMarketingServiceRow
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
                  <Input value={newStat.value} onChange={(e) => setNewStat({ ...newStat, value: e.target.value })} placeholder="e.g. 500+" />
                </div>
                <div>
                  <Label>Label</Label>
                  <Input value={newStat.label} onChange={(e) => setNewStat({ ...newStat, label: e.target.value })} placeholder="e.g. Campaigns Launched" />
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
                        <SortableMarketingStatRow
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

        {/* Benefits Tab */}
        <TabsContent value="benefits" className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Add Benefit</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Benefit</Label>
                  <Input value={newBenefit.benefit} onChange={(e) => setNewBenefit({ ...newBenefit, benefit: e.target.value })} placeholder="e.g. AI-Powered Campaign Optimization" />
                </div>
                <div>
                  <Label>Link (optional)</Label>
                  <Input value={newBenefit.link} onChange={(e) => setNewBenefit({ ...newBenefit, link: e.target.value })} placeholder="https://example.com/page" />
                </div>
                <div className="flex items-end">
                  <Button onClick={addBenefit}><Plus className="w-4 h-4 mr-2" />Add Benefit</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Benefits</CardTitle></CardHeader>
            <CardContent>
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleBenefitDragEnd}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Benefit</TableHead>
                      <TableHead>Link</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <SortableContext items={benefits.map(b => b.id)} strategy={verticalListSortingStrategy}>
                      {benefits.map((benefit) => (
                        <SortableMarketingBenefitRow
                          key={benefit.id}
                          benefit={benefit}
                          isEditing={editingBenefit?.id === benefit.id}
                          editingData={editingBenefit}
                          onEditStart={() => setEditingBenefit(benefit)}
                          onEditChange={setEditingBenefit}
                          onSave={() => editingBenefit && updateBenefit(editingBenefit)}
                          onCancel={() => setEditingBenefit(null)}
                          onDelete={() => deleteBenefit(benefit.id)}
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

export default AdminMarketingContent;
