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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const AdminHomepageContent = () => {
  const { toast } = useToast();

  const [founderProfile, setFounderProfile] = useState<any>(null);
  const [features, setFeatures] = useState<any[]>([]);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [aboutItems, setAboutItems] = useState<any[]>([]);
  const [companyInfo, setCompanyInfo] = useState<any[]>([]);

  const [editingFeature, setEditingFeature] = useState<any>(null);
  const [editingGallery, setEditingGallery] = useState<any>(null);
  const [editingAbout, setEditingAbout] = useState<any>(null);
  const [editingInfo, setEditingInfo] = useState<any>(null);

  const [newFeature, setNewFeature] = useState({ title: '', icon: 'Star', order_index: 0 });
  const [newGallery, setNewGallery] = useState({ title: '', media_url: '', media_type: 'image', description: '', order_index: 0 });
  const [newAbout, setNewAbout] = useState({ title: '', content: '', order_index: 0 });

  const iconOptions = ['Music', 'Mic', 'Brain', 'Users', 'Zap', 'Star'];

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const [profileRes, featuresRes, galleryRes, aboutRes, infoRes] = await Promise.all([
      supabase.from('founder_profile').select('*').maybeSingle(),
      supabase.from('company_features').select('*').order('order_index'),
      supabase.from('gallery_items').select('*').order('order_index'),
      supabase.from('about_accordion').select('*').order('order_index'),
      supabase.from('company_info').select('*')
    ]);

    if (profileRes.data) setFounderProfile(profileRes.data);
    if (featuresRes.data) setFeatures(featuresRes.data);
    if (galleryRes.data) setGalleryItems(galleryRes.data);
    if (aboutRes.data) setAboutItems(aboutRes.data);
    if (infoRes.data) setCompanyInfo(infoRes.data);
  };

  const updateFounderProfile = async () => {
    if (!founderProfile) return;

    const { error } = await supabase
      .from('founder_profile')
      .update(founderProfile)
      .eq('id', founderProfile.id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to update profile', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Profile updated successfully' });
    }
  };

  const addFeature = async () => {
    const { error } = await supabase.from('company_features').insert([newFeature]);

    if (error) {
      toast({ title: 'Error', description: 'Failed to add feature', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Feature added successfully' });
      setNewFeature({ title: '', icon: 'Star', order_index: 0 });
      fetchAllData();
    }
  };

  const updateFeature = async (feature: any) => {
    const { error } = await supabase
      .from('company_features')
      .update(feature)
      .eq('id', feature.id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to update feature', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Feature updated successfully' });
      setEditingFeature(null);
      fetchAllData();
    }
  };

  const deleteFeature = async (id: string) => {
    const { error } = await supabase.from('company_features').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to delete feature', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Feature deleted successfully' });
      fetchAllData();
    }
  };

  const addGalleryItem = async () => {
    const { error } = await supabase.from('gallery_items').insert([newGallery]);

    if (error) {
      toast({ title: 'Error', description: 'Failed to add gallery item', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Gallery item added successfully' });
      setNewGallery({ title: '', media_url: '', media_type: 'image', description: '', order_index: 0 });
      fetchAllData();
    }
  };

  const updateGalleryItem = async (item: any) => {
    const { error } = await supabase
      .from('gallery_items')
      .update(item)
      .eq('id', item.id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to update gallery item', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Gallery item updated successfully' });
      setEditingGallery(null);
      fetchAllData();
    }
  };

  const deleteGalleryItem = async (id: string) => {
    const { error } = await supabase.from('gallery_items').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to delete gallery item', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Gallery item deleted successfully' });
      fetchAllData();
    }
  };

  const addAboutItem = async () => {
    const { error } = await supabase.from('about_accordion').insert([newAbout]);

    if (error) {
      toast({ title: 'Error', description: 'Failed to add about item', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'About item added successfully' });
      setNewAbout({ title: '', content: '', order_index: 0 });
      fetchAllData();
    }
  };

  const updateAboutItem = async (item: any) => {
    const { error } = await supabase
      .from('about_accordion')
      .update(item)
      .eq('id', item.id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to update about item', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'About item updated successfully' });
      setEditingAbout(null);
      fetchAllData();
    }
  };

  const deleteAboutItem = async (id: string) => {
    const { error } = await supabase.from('about_accordion').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to delete about item', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'About item deleted successfully' });
      fetchAllData();
    }
  };

  const updateCompanyInfo = async (info: any) => {
    const { error } = await supabase
      .from('company_info')
      .update(info)
      .eq('id', info.id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to update company info', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Company info updated successfully' });
      setEditingInfo(null);
      fetchAllData();
    }
  };

  return (
    <Tabs defaultValue="founder" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="founder">Founder Profile</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="sections">Section Info</TabsTrigger>
      </TabsList>

      <TabsContent value="founder" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Founder Profile</CardTitle>
            <CardDescription>Manage founder information and bio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {founderProfile && (
              <>
                <div>
                  <Label>Name</Label>
                  <Input
                    value={founderProfile.name}
                    onChange={(e) => setFounderProfile({ ...founderProfile, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Title</Label>
                  <Input
                    value={founderProfile.title}
                    onChange={(e) => setFounderProfile({ ...founderProfile, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Quote</Label>
                  <Textarea
                    value={founderProfile.quote}
                    onChange={(e) => setFounderProfile({ ...founderProfile, quote: e.target.value })}
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Bio</Label>
                  <Textarea
                    value={founderProfile.bio}
                    onChange={(e) => setFounderProfile({ ...founderProfile, bio: e.target.value })}
                    rows={5}
                  />
                </div>
                <div>
                  <Label>Video URL</Label>
                  <Input
                    value={founderProfile.video_url || ''}
                    onChange={(e) => setFounderProfile({ ...founderProfile, video_url: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input
                    value={founderProfile.image_url || ''}
                    onChange={(e) => setFounderProfile({ ...founderProfile, image_url: e.target.value })}
                  />
                </div>
                <Button onClick={updateFounderProfile}>Update Profile</Button>
              </>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="features" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Add Company Feature</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Title</Label>
                <Input
                  value={newFeature.title}
                  onChange={(e) => setNewFeature({ ...newFeature, title: e.target.value })}
                />
              </div>
              <div>
                <Label>Icon</Label>
                <Select value={newFeature.icon} onValueChange={(value) => setNewFeature({ ...newFeature, icon: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon} value={icon}>{icon}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Order</Label>
                <Input
                  type="number"
                  value={newFeature.order_index}
                  onChange={(e) => setNewFeature({ ...newFeature, order_index: parseInt(e.target.value) })}
                />
              </div>
            </div>
            <Button onClick={addFeature}>
              <Plus className="w-4 h-4 mr-2" />
              Add Feature
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Features</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Icon</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature) => (
                  <TableRow key={feature.id}>
                    {editingFeature?.id === feature.id ? (
                      <>
                        <TableCell>
                          <Input
                            value={editingFeature.title}
                            onChange={(e) => setEditingFeature({ ...editingFeature, title: e.target.value })}
                          />
                        </TableCell>
                        <TableCell>
                          <Select value={editingFeature.icon} onValueChange={(value) => setEditingFeature({ ...editingFeature, icon: value })}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {iconOptions.map((icon) => (
                                <SelectItem key={icon} value={icon}>{icon}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={editingFeature.order_index}
                            onChange={(e) => setEditingFeature({ ...editingFeature, order_index: parseInt(e.target.value) })}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => updateFeature(editingFeature)}>
                              <Save className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setEditingFeature(null)}>
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>{feature.title}</TableCell>
                        <TableCell>{feature.icon}</TableCell>
                        <TableCell>{feature.order_index}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setEditingFeature(feature)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => deleteFeature(feature.id)}>
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

      <TabsContent value="gallery" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Add Gallery Item</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Title</Label>
                <Input
                  value={newGallery.title}
                  onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                />
              </div>
              <div>
                <Label>Media Type</Label>
                <Select value={newGallery.media_type} onValueChange={(value) => setNewGallery({ ...newGallery, media_type: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Media URL</Label>
              <Input
                value={newGallery.media_url}
                onChange={(e) => setNewGallery({ ...newGallery, media_url: e.target.value })}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea
                value={newGallery.description}
                onChange={(e) => setNewGallery({ ...newGallery, description: e.target.value })}
                rows={2}
              />
            </div>
            <div>
              <Label>Order</Label>
              <Input
                type="number"
                value={newGallery.order_index}
                onChange={(e) => setNewGallery({ ...newGallery, order_index: parseInt(e.target.value) })}
              />
            </div>
            <Button onClick={addGalleryItem}>
              <Plus className="w-4 h-4 mr-2" />
              Add Gallery Item
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {galleryItems.map((item) => (
                  <TableRow key={item.id}>
                    {editingGallery?.id === item.id ? (
                      <>
                        <TableCell>
                          <Input
                            value={editingGallery.title}
                            onChange={(e) => setEditingGallery({ ...editingGallery, title: e.target.value })}
                          />
                        </TableCell>
                        <TableCell>
                          <Select value={editingGallery.media_type} onValueChange={(value) => setEditingGallery({ ...editingGallery, media_type: value })}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="image">Image</SelectItem>
                              <SelectItem value="video">Video</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={editingGallery.order_index}
                            onChange={(e) => setEditingGallery({ ...editingGallery, order_index: parseInt(e.target.value) })}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => updateGalleryItem(editingGallery)}>
                              <Save className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setEditingGallery(null)}>
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.media_type}</TableCell>
                        <TableCell>{item.order_index}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setEditingGallery(item)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => deleteGalleryItem(item.id)}>
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

      <TabsContent value="about" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Add About Item</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={newAbout.title}
                onChange={(e) => setNewAbout({ ...newAbout, title: e.target.value })}
              />
            </div>
            <div>
              <Label>Content</Label>
              <Textarea
                value={newAbout.content}
                onChange={(e) => setNewAbout({ ...newAbout, content: e.target.value })}
                rows={4}
              />
            </div>
            <div>
              <Label>Order</Label>
              <Input
                type="number"
                value={newAbout.order_index}
                onChange={(e) => setNewAbout({ ...newAbout, order_index: parseInt(e.target.value) })}
              />
            </div>
            <Button onClick={addAboutItem}>
              <Plus className="w-4 h-4 mr-2" />
              Add About Item
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage About Section</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {aboutItems.map((item) => (
                  <TableRow key={item.id}>
                    {editingAbout?.id === item.id ? (
                      <>
                        <TableCell>
                          <Input
                            value={editingAbout.title}
                            onChange={(e) => setEditingAbout({ ...editingAbout, title: e.target.value })}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={editingAbout.order_index}
                            onChange={(e) => setEditingAbout({ ...editingAbout, order_index: parseInt(e.target.value) })}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => updateAboutItem(editingAbout)}>
                              <Save className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setEditingAbout(null)}>
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.order_index}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setEditingAbout(item)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => deleteAboutItem(item.id)}>
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

      <TabsContent value="sections" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Section Information</CardTitle>
            <CardDescription>Manage headings and subheadings for each section</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Heading</TableHead>
                  <TableHead>Subheading</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companyInfo.map((info) => (
                  <TableRow key={info.id}>
                    {editingInfo?.id === info.id ? (
                      <>
                        <TableCell>{info.section}</TableCell>
                        <TableCell>
                          <Textarea
                            value={editingInfo.heading}
                            onChange={(e) => setEditingInfo({ ...editingInfo, heading: e.target.value })}
                            rows={2}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={editingInfo.subheading}
                            onChange={(e) => setEditingInfo({ ...editingInfo, subheading: e.target.value })}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => updateCompanyInfo(editingInfo)}>
                              <Save className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setEditingInfo(null)}>
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell className="font-medium">{info.section}</TableCell>
                        <TableCell className="max-w-xs">{info.heading}</TableCell>
                        <TableCell>{info.subheading}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline" onClick={() => setEditingInfo(info)}>
                            <Edit className="w-4 h-4" />
                          </Button>
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
  );
};

export default AdminHomepageContent;
