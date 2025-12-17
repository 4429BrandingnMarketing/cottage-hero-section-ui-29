import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface TechnologyCapability {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  order_index: number;
}

interface TechnologyStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

const ICON_OPTIONS = ['Brain', 'Code', 'Database', 'Shield', 'Cpu', 'Zap', 'Sparkles'];

const AdminTechnologyContent = () => {
  const { toast } = useToast();
  const [capabilities, setCapabilities] = useState<TechnologyCapability[]>([]);
  const [stats, setStats] = useState<TechnologyStat[]>([]);
  const [editingCapability, setEditingCapability] = useState<TechnologyCapability | null>(null);
  const [editingStat, setEditingStat] = useState<TechnologyStat | null>(null);

  const [newCapability, setNewCapability] = useState({
    title: '',
    description: '',
    icon: 'Cpu',
    features: ''
  });

  const [newStat, setNewStat] = useState({
    value: '',
    label: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [capabilitiesRes, statsRes] = await Promise.all([
      supabase.from('technology_capabilities').select('*').order('order_index'),
      supabase.from('technology_stats').select('*').order('order_index')
    ]);

    if (capabilitiesRes.data) setCapabilities(capabilitiesRes.data);
    if (statsRes.data) setStats(statsRes.data);
  };

  // Capabilities CRUD
  const addCapability = async () => {
    const featuresArray = newCapability.features.split(',').map(f => f.trim()).filter(f => f);
    const { error } = await supabase
      .from('technology_capabilities')
      .insert([{
        title: newCapability.title,
        description: newCapability.description,
        icon: newCapability.icon,
        features: featuresArray,
        order_index: capabilities.length
      }]);

    if (error) {
      toast({ title: "Error", description: "Failed to add capability", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Capability added" });
      setNewCapability({ title: '', description: '', icon: 'Cpu', features: '' });
      fetchData();
    }
  };

  const updateCapability = async (capability: TechnologyCapability) => {
    const { error } = await supabase
      .from('technology_capabilities')
      .update(capability)
      .eq('id', capability.id);

    if (error) {
      toast({ title: "Error", description: "Failed to update capability", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Capability updated" });
      setEditingCapability(null);
      fetchData();
    }
  };

  const deleteCapability = async (id: string) => {
    const { error } = await supabase
      .from('technology_capabilities')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to delete capability", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Capability deleted" });
      fetchData();
    }
  };

  // Stats CRUD
  const addStat = async () => {
    const { error } = await supabase
      .from('technology_stats')
      .insert([{
        value: newStat.value,
        label: newStat.label,
        order_index: stats.length
      }]);

    if (error) {
      toast({ title: "Error", description: "Failed to add stat", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Stat added" });
      setNewStat({ value: '', label: '' });
      fetchData();
    }
  };

  const updateStat = async (stat: TechnologyStat) => {
    const { error } = await supabase
      .from('technology_stats')
      .update(stat)
      .eq('id', stat.id);

    if (error) {
      toast({ title: "Error", description: "Failed to update stat", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Stat updated" });
      setEditingStat(null);
      fetchData();
    }
  };

  const deleteStat = async (id: string) => {
    const { error } = await supabase
      .from('technology_stats')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to delete stat", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Stat deleted" });
      fetchData();
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="capabilities">
        <TabsList>
          <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="capabilities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add Capability</CardTitle>
              <CardDescription>Add a new technology capability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={newCapability.title}
                    onChange={(e) => setNewCapability({ ...newCapability, title: e.target.value })}
                    placeholder="e.g., AI & Machine Learning"
                  />
                </div>
                <div>
                  <Label>Icon</Label>
                  <select
                    className="w-full h-10 px-3 border rounded-md bg-background"
                    value={newCapability.icon}
                    onChange={(e) => setNewCapability({ ...newCapability, icon: e.target.value })}
                  >
                    {ICON_OPTIONS.map(icon => (
                      <option key={icon} value={icon}>{icon}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  value={newCapability.description}
                  onChange={(e) => setNewCapability({ ...newCapability, description: e.target.value })}
                  placeholder="Describe the capability..."
                />
              </div>
              <div>
                <Label>Features (comma-separated)</Label>
                <Input
                  value={newCapability.features}
                  onChange={(e) => setNewCapability({ ...newCapability, features: e.target.value })}
                  placeholder="e.g., Neural Networks, NLP Processing, Computer Vision"
                />
              </div>
              <Button onClick={addCapability} disabled={!newCapability.title || !newCapability.description}>
                <Plus className="w-4 h-4 mr-2" />
                Add Capability
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Icon</TableHead>
                    <TableHead>Features</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {capabilities.map((cap) => (
                    <TableRow key={cap.id}>
                      {editingCapability?.id === cap.id ? (
                        <>
                          <TableCell>
                            <Input
                              value={editingCapability.title}
                              onChange={(e) => setEditingCapability({ ...editingCapability, title: e.target.value })}
                            />
                          </TableCell>
                          <TableCell>
                            <select
                              className="h-10 px-3 border rounded-md bg-background"
                              value={editingCapability.icon}
                              onChange={(e) => setEditingCapability({ ...editingCapability, icon: e.target.value })}
                            >
                              {ICON_OPTIONS.map(icon => (
                                <option key={icon} value={icon}>{icon}</option>
                              ))}
                            </select>
                          </TableCell>
                          <TableCell>
                            <Input
                              value={editingCapability.features.join(', ')}
                              onChange={(e) => setEditingCapability({ 
                                ...editingCapability, 
                                features: e.target.value.split(',').map(f => f.trim()).filter(f => f) 
                              })}
                            />
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => updateCapability(editingCapability)}>
                                <Save className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingCapability(null)}>
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell className="font-medium">{cap.title}</TableCell>
                          <TableCell>{cap.icon}</TableCell>
                          <TableCell className="max-w-xs truncate">{cap.features.join(', ')}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => setEditingCapability(cap)}>
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="destructive" onClick={() => deleteCapability(cap.id)}>
                                <Trash2 className="w-4 h-4" />
                              </Button>
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

        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add Stat</CardTitle>
              <CardDescription>Add a new technology stat</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Value</Label>
                  <Input
                    value={newStat.value}
                    onChange={(e) => setNewStat({ ...newStat, value: e.target.value })}
                    placeholder="e.g., 99.9%"
                  />
                </div>
                <div>
                  <Label>Label</Label>
                  <Input
                    value={newStat.label}
                    onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
                    placeholder="e.g., Uptime SLA"
                  />
                </div>
              </div>
              <Button onClick={addStat} disabled={!newStat.value || !newStat.label}>
                <Plus className="w-4 h-4 mr-2" />
                Add Stat
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Value</TableHead>
                    <TableHead>Label</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.map((stat) => (
                    <TableRow key={stat.id}>
                      {editingStat?.id === stat.id ? (
                        <>
                          <TableCell>
                            <Input
                              value={editingStat.value}
                              onChange={(e) => setEditingStat({ ...editingStat, value: e.target.value })}
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              value={editingStat.label}
                              onChange={(e) => setEditingStat({ ...editingStat, label: e.target.value })}
                            />
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => updateStat(editingStat)}>
                                <Save className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingStat(null)}>
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell className="font-medium">{stat.value}</TableCell>
                          <TableCell>{stat.label}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => setEditingStat(stat)}>
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="destructive" onClick={() => deleteStat(stat.id)}>
                                <Trash2 className="w-4 h-4" />
                              </Button>
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

export default AdminTechnologyContent;
