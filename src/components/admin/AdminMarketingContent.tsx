import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const iconOptions = ['Target', 'TrendingUp', 'Globe', 'BarChart3', 'Megaphone', 'Users'];

const AdminMarketingContent = () => {
  const { toast } = useToast();

  const [services, setServices] = useState<any[]>([]);
  const [stats, setStats] = useState<any[]>([]);
  const [benefits, setBenefits] = useState<any[]>([]);

  const [editingService, setEditingService] = useState<any>(null);
  const [editingStat, setEditingStat] = useState<any>(null);
  const [editingBenefit, setEditingBenefit] = useState<any>(null);

  const [newService, setNewService] = useState({ title: '', description: '', icon: 'Target', order_index: 0 });
  const [newStat, setNewStat] = useState({ value: '', label: '', order_index: 0 });
  const [newBenefit, setNewBenefit] = useState({ benefit: '', order_index: 0 });

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
    const { error } = await supabase.from('marketing_services').insert([newService]);
    if (error) {
      toast({ title: 'Error', description: 'Failed to add service', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Service added' });
      setNewService({ title: '', description: '', icon: 'Target', order_index: 0 });
      fetchAllData();
    }
  };

  const updateService = async (service: any) => {
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
    const { error } = await supabase.from('marketing_stats').insert([newStat]);
    if (error) {
      toast({ title: 'Error', description: 'Failed to add stat', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Stat added' });
      setNewStat({ value: '', label: '', order_index: 0 });
      fetchAllData();
    }
  };

  const updateStat = async (stat: any) => {
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
    const { error } = await supabase.from('marketing_benefits').insert([newBenefit]);
    if (error) {
      toast({ title: 'Error', description: 'Failed to add benefit', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Benefit added' });
      setNewBenefit({ benefit: '', order_index: 0 });
      fetchAllData();
    }
  };

  const updateBenefit = async (benefit: any) => {
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Icon</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.id}>
                      {editingService?.id === service.id ? (
                        <>
                          <TableCell>
                            <Input value={editingService.title} onChange={(e) => setEditingService({ ...editingService, title: e.target.value })} />
                          </TableCell>
                          <TableCell>
                            <Textarea value={editingService.description} onChange={(e) => setEditingService({ ...editingService, description: e.target.value })} rows={1} />
                          </TableCell>
                          <TableCell>
                            <Select value={editingService.icon} onValueChange={(val) => setEditingService({ ...editingService, icon: val })}>
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                {iconOptions.map((icon) => (<SelectItem key={icon} value={icon}>{icon}</SelectItem>))}
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => updateService(editingService)}><Save className="w-4 h-4" /></Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingService(null)}><X className="w-4 h-4" /></Button>
                            </div>
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell className="font-medium">{service.title}</TableCell>
                          <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                          <TableCell>{service.icon}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => setEditingService(service)}><Edit className="w-4 h-4" /></Button>
                              <Button size="sm" variant="destructive" onClick={() => deleteService(service.id)}><Trash2 className="w-4 h-4" /></Button>
                            </div>
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
                <div>
                  <Label>Order</Label>
                  <Input type="number" value={newStat.order_index} onChange={(e) => setNewStat({ ...newStat, order_index: parseInt(e.target.value) || 0 })} />
                </div>
              </div>
              <Button onClick={addStat}><Plus className="w-4 h-4 mr-2" />Add Stat</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Stats</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Value</TableHead>
                    <TableHead>Label</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.map((stat) => (
                    <TableRow key={stat.id}>
                      {editingStat?.id === stat.id ? (
                        <>
                          <TableCell><Input value={editingStat.value} onChange={(e) => setEditingStat({ ...editingStat, value: e.target.value })} /></TableCell>
                          <TableCell><Input value={editingStat.label} onChange={(e) => setEditingStat({ ...editingStat, label: e.target.value })} /></TableCell>
                          <TableCell><Input type="number" value={editingStat.order_index} onChange={(e) => setEditingStat({ ...editingStat, order_index: parseInt(e.target.value) || 0 })} /></TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => updateStat(editingStat)}><Save className="w-4 h-4" /></Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingStat(null)}><X className="w-4 h-4" /></Button>
                            </div>
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell className="font-medium">{stat.value}</TableCell>
                          <TableCell>{stat.label}</TableCell>
                          <TableCell>{stat.order_index}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => setEditingStat(stat)}><Edit className="w-4 h-4" /></Button>
                              <Button size="sm" variant="destructive" onClick={() => deleteStat(stat.id)}><Trash2 className="w-4 h-4" /></Button>
                            </div>
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Benefits Tab */}
        <TabsContent value="benefits" className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Add Benefit</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Label>Benefit</Label>
                  <Input value={newBenefit.benefit} onChange={(e) => setNewBenefit({ ...newBenefit, benefit: e.target.value })} placeholder="e.g. AI-Powered Campaign Optimization" />
                </div>
                <div>
                  <Label>Order</Label>
                  <Input type="number" value={newBenefit.order_index} onChange={(e) => setNewBenefit({ ...newBenefit, order_index: parseInt(e.target.value) || 0 })} />
                </div>
              </div>
              <Button onClick={addBenefit}><Plus className="w-4 h-4 mr-2" />Add Benefit</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Benefits</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Benefit</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {benefits.map((benefit) => (
                    <TableRow key={benefit.id}>
                      {editingBenefit?.id === benefit.id ? (
                        <>
                          <TableCell><Input value={editingBenefit.benefit} onChange={(e) => setEditingBenefit({ ...editingBenefit, benefit: e.target.value })} /></TableCell>
                          <TableCell><Input type="number" value={editingBenefit.order_index} onChange={(e) => setEditingBenefit({ ...editingBenefit, order_index: parseInt(e.target.value) || 0 })} /></TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => updateBenefit(editingBenefit)}><Save className="w-4 h-4" /></Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingBenefit(null)}><X className="w-4 h-4" /></Button>
                            </div>
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell className="font-medium">{benefit.benefit}</TableCell>
                          <TableCell>{benefit.order_index}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => setEditingBenefit(benefit)}><Edit className="w-4 h-4" /></Button>
                              <Button size="sm" variant="destructive" onClick={() => deleteBenefit(benefit.id)}><Trash2 className="w-4 h-4" /></Button>
                            </div>
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminMarketingContent;