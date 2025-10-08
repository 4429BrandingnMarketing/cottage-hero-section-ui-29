import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Plus, Save, X, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [artists, setArtists] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);

  const [editingArtist, setEditingArtist] = useState<any>(null);
  const [editingTrack, setEditingTrack] = useState<any>(null);
  const [editingService, setEditingService] = useState<any>(null);

  const [newArtist, setNewArtist] = useState({
    name: '',
    genre: '',
    image_url: '',
    streams: '',
    verified: false
  });

  const [newTrack, setNewTrack] = useState({
    title: '',
    artist: '',
    duration: '',
    streams: ''
  });

  const [newService, setNewService] = useState({
    title: '',
    description: '',
    price: '',
    features: ''
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      navigate('/login');
      return;
    }

    setUser(user);
    setLoading(false);
    fetchAllData();
  };

  const fetchAllData = async () => {
    await Promise.all([
      fetchArtists(),
      fetchTracks(),
      fetchServices(),
      fetchSubmissions()
    ]);
  };

  const fetchArtists = async () => {
    const { data, error } = await supabase
      .from('artists')
      .select('*')
      .order('created_at', { ascending: false });

    if (data && !error) setArtists(data);
  };

  const fetchTracks = async () => {
    const { data, error } = await supabase
      .from('tracks')
      .select('*')
      .order('created_at', { ascending: false });

    if (data && !error) setTracks(data);
  };

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });

    if (data && !error) setServices(data);
  };

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (data && !error) setSubmissions(data);
  };

  const addArtist = async () => {
    const { error } = await supabase
      .from('artists')
      .insert([newArtist]);

    if (error) {
      toast({ title: "Error", description: "Failed to add artist", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Artist added successfully" });
      setNewArtist({ name: '', genre: '', image_url: '', streams: '', verified: false });
      fetchArtists();
    }
  };

  const updateArtist = async (artist: any) => {
    const { error } = await supabase
      .from('artists')
      .update(artist)
      .eq('id', artist.id);

    if (error) {
      toast({ title: "Error", description: "Failed to update artist", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Artist updated successfully" });
      setEditingArtist(null);
      fetchArtists();
    }
  };

  const deleteArtist = async (id: string) => {
    const { error } = await supabase
      .from('artists')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to delete artist", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Artist deleted successfully" });
      fetchArtists();
    }
  };

  const addTrack = async () => {
    const { error } = await supabase
      .from('tracks')
      .insert([newTrack]);

    if (error) {
      toast({ title: "Error", description: "Failed to add track", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Track added successfully" });
      setNewTrack({ title: '', artist: '', duration: '', streams: '' });
      fetchTracks();
    }
  };

  const updateTrack = async (track: any) => {
    const { error } = await supabase
      .from('tracks')
      .update(track)
      .eq('id', track.id);

    if (error) {
      toast({ title: "Error", description: "Failed to update track", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Track updated successfully" });
      setEditingTrack(null);
      fetchTracks();
    }
  };

  const deleteTrack = async (id: string) => {
    const { error } = await supabase
      .from('tracks')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to delete track", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Track deleted successfully" });
      fetchTracks();
    }
  };

  const addService = async () => {
    const featuresArray = newService.features.split('\n').filter(f => f.trim());

    const { error } = await supabase
      .from('services')
      .insert([{ ...newService, features: featuresArray }]);

    if (error) {
      toast({ title: "Error", description: "Failed to add service", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Service added successfully" });
      setNewService({ title: '', description: '', price: '', features: '' });
      fetchServices();
    }
  };

  const updateService = async (service: any) => {
    const { error } = await supabase
      .from('services')
      .update(service)
      .eq('id', service.id);

    if (error) {
      toast({ title: "Error", description: "Failed to update service", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Service updated successfully" });
      setEditingService(null);
      fetchServices();
    }
  };

  const deleteService = async (id: string) => {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to delete service", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Service deleted successfully" });
      fetchServices();
    }
  };

  const updateSubmissionStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('submissions')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to update submission", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Submission updated successfully" });
      fetchSubmissions();
    }
  };

  const deleteSubmission = async (id: string) => {
    const { error } = await supabase
      .from('submissions')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to delete submission", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Submission deleted successfully" });
      fetchSubmissions();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage Red Vision Music content</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="artists" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="artists">Artists</TabsTrigger>
            <TabsTrigger value="tracks">Tracks</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
          </TabsList>

          <TabsContent value="artists" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Add New Artist</CardTitle>
                <CardDescription>Create a new artist profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={newArtist.name}
                      onChange={(e) => setNewArtist({...newArtist, name: e.target.value})}
                      placeholder="Artist name"
                    />
                  </div>
                  <div>
                    <Label>Genre</Label>
                    <Input
                      value={newArtist.genre}
                      onChange={(e) => setNewArtist({...newArtist, genre: e.target.value})}
                      placeholder="Genre"
                    />
                  </div>
                  <div>
                    <Label>Image URL</Label>
                    <Input
                      value={newArtist.image_url}
                      onChange={(e) => setNewArtist({...newArtist, image_url: e.target.value})}
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <Label>Streams</Label>
                    <Input
                      value={newArtist.streams}
                      onChange={(e) => setNewArtist({...newArtist, streams: e.target.value})}
                      placeholder="e.g., 2.5M"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={newArtist.verified}
                    onCheckedChange={(checked) => setNewArtist({...newArtist, verified: checked})}
                  />
                  <Label>Verified Artist</Label>
                </div>
                <Button onClick={addArtist}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Artist
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Artists</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Genre</TableHead>
                      <TableHead>Streams</TableHead>
                      <TableHead>Verified</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {artists.map((artist) => (
                      <TableRow key={artist.id}>
                        {editingArtist?.id === artist.id ? (
                          <>
                            <TableCell>
                              <Input
                                value={editingArtist.name}
                                onChange={(e) => setEditingArtist({...editingArtist, name: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={editingArtist.genre}
                                onChange={(e) => setEditingArtist({...editingArtist, genre: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={editingArtist.streams}
                                onChange={(e) => setEditingArtist({...editingArtist, streams: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <Switch
                                checked={editingArtist.verified}
                                onCheckedChange={(checked) => setEditingArtist({...editingArtist, verified: checked})}
                              />
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" onClick={() => updateArtist(editingArtist)}>
                                  <Save className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => setEditingArtist(null)}>
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell>{artist.name}</TableCell>
                            <TableCell>{artist.genre}</TableCell>
                            <TableCell>{artist.streams}</TableCell>
                            <TableCell>
                              {artist.verified ? <Badge>Verified</Badge> : <Badge variant="secondary">Not Verified</Badge>}
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={() => setEditingArtist(artist)}>
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="destructive" onClick={() => deleteArtist(artist.id)}>
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

          <TabsContent value="tracks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Add New Track</CardTitle>
                <CardDescription>Add a new track to the catalog</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={newTrack.title}
                      onChange={(e) => setNewTrack({...newTrack, title: e.target.value})}
                      placeholder="Track title"
                    />
                  </div>
                  <div>
                    <Label>Artist</Label>
                    <Input
                      value={newTrack.artist}
                      onChange={(e) => setNewTrack({...newTrack, artist: e.target.value})}
                      placeholder="Artist name"
                    />
                  </div>
                  <div>
                    <Label>Duration</Label>
                    <Input
                      value={newTrack.duration}
                      onChange={(e) => setNewTrack({...newTrack, duration: e.target.value})}
                      placeholder="e.g., 3:42"
                    />
                  </div>
                  <div>
                    <Label>Streams</Label>
                    <Input
                      value={newTrack.streams}
                      onChange={(e) => setNewTrack({...newTrack, streams: e.target.value})}
                      placeholder="e.g., 850K"
                    />
                  </div>
                </div>
                <Button onClick={addTrack}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Track
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Tracks</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Artist</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Streams</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tracks.map((track) => (
                      <TableRow key={track.id}>
                        {editingTrack?.id === track.id ? (
                          <>
                            <TableCell>
                              <Input
                                value={editingTrack.title}
                                onChange={(e) => setEditingTrack({...editingTrack, title: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={editingTrack.artist}
                                onChange={(e) => setEditingTrack({...editingTrack, artist: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={editingTrack.duration}
                                onChange={(e) => setEditingTrack({...editingTrack, duration: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={editingTrack.streams}
                                onChange={(e) => setEditingTrack({...editingTrack, streams: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" onClick={() => updateTrack(editingTrack)}>
                                  <Save className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => setEditingTrack(null)}>
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell>{track.title}</TableCell>
                            <TableCell>{track.artist}</TableCell>
                            <TableCell>{track.duration}</TableCell>
                            <TableCell>{track.streams}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={() => setEditingTrack(track)}>
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="destructive" onClick={() => deleteTrack(track.id)}>
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

          <TabsContent value="services" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Add New Service</CardTitle>
                <CardDescription>Create a new service offering</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={newService.title}
                    onChange={(e) => setNewService({...newService, title: e.target.value})}
                    placeholder="Service title"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    value={newService.description}
                    onChange={(e) => setNewService({...newService, description: e.target.value})}
                    placeholder="Service description"
                  />
                </div>
                <div>
                  <Label>Price</Label>
                  <Input
                    value={newService.price}
                    onChange={(e) => setNewService({...newService, price: e.target.value})}
                    placeholder="e.g., $150/hr or Custom"
                  />
                </div>
                <div>
                  <Label>Features (one per line)</Label>
                  <Textarea
                    value={newService.features}
                    onChange={(e) => setNewService({...newService, features: e.target.value})}
                    placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                    rows={4}
                  />
                </div>
                <Button onClick={addService}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Services</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Features</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => (
                      <TableRow key={service.id}>
                        {editingService?.id === service.id ? (
                          <>
                            <TableCell>
                              <Input
                                value={editingService.title}
                                onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={editingService.description}
                                onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={editingService.price}
                                onChange={(e) => setEditingService({...editingService, price: e.target.value})}
                              />
                            </TableCell>
                            <TableCell>
                              <Textarea
                                value={Array.isArray(editingService.features) ? editingService.features.join('\n') : ''}
                                onChange={(e) => setEditingService({...editingService, features: e.target.value.split('\n')})}
                                rows={3}
                              />
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" onClick={() => updateService(editingService)}>
                                  <Save className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => setEditingService(null)}>
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell>{service.title}</TableCell>
                            <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                            <TableCell>{service.price}</TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                {(service.features as string[]).map((f, i) => (
                                  <div key={i} className="text-sm">{f}</div>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={() => setEditingService(service)}>
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="destructive" onClick={() => deleteService(service.id)}>
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

          <TabsContent value="submissions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Artist Submissions</CardTitle>
                <CardDescription>Review and manage artist applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Artist Name</TableHead>
                      <TableHead>Genre</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.artist_name}</TableCell>
                        <TableCell>{submission.genre}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              submission.status === 'approved'
                                ? 'default'
                                : submission.status === 'rejected'
                                ? 'destructive'
                                : 'secondary'
                            }
                          >
                            {submission.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateSubmissionStatus(submission.id, 'approved')}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateSubmissionStatus(submission.id, 'rejected')}
                            >
                              Reject
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => deleteSubmission(submission.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
