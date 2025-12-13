import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Edit, Plus, Save, X, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { PreviewPanel } from '@/components/admin/PreviewPanel';
import { SortableGalleryRow } from '@/components/admin/SortableGalleryRow';
import { SortableAboutRow } from '@/components/admin/SortableAboutRow';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
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
  const [showPreview, setShowPreview] = useState(false);

  const [newFeature, setNewFeature] = useState({ title: '', icon: 'Star', order_index: 0 });
  const [newGallery, setNewGallery] = useState({ title: '', media_url: '', media_type: 'image', description: '', order_index: 0 });
  const [newAbout, setNewAbout] = useState({ title: '', content: '', order_index: 0 });
  const [newInfo, setNewInfo] = useState({ section: '', heading: '', subheading: '', video_url: '' });
  const [newFounder, setNewFounder] = useState({ name: '', title: '', quote: '', video_url: '' });

  const iconOptions = ['Music', 'Mic', 'Brain', 'Users', 'Zap', 'Star'];

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleGalleryDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = galleryItems.findIndex((item) => item.id === active.id);
      const newIndex = galleryItems.findIndex((item) => item.id === over.id);

      const newItems = arrayMove(galleryItems, oldIndex, newIndex);
      
      setGalleryItems(newItems);

      const updates = newItems.map((item, index) => ({
        id: item.id,
        order_index: index,
      }));

      for (const update of updates) {
        const { error } = await supabase
          .from('gallery_items')
          .update({ order_index: update.order_index })
          .eq('id', update.id);

        if (error) {
          toast({ title: 'Error', description: 'Failed to update order', variant: 'destructive' });
          fetchAllData();
          return;
        }
      }

      toast({ title: 'Success', description: 'Gallery order updated' });
    }
  };

  const handleAboutDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = aboutItems.findIndex((item) => item.id === active.id);
      const newIndex = aboutItems.findIndex((item) => item.id === over.id);

      const newItems = arrayMove(aboutItems, oldIndex, newIndex);
      
      setAboutItems(newItems);

      const updates = newItems.map((item, index) => ({
        id: item.id,
        order_index: index,
      }));

      for (const update of updates) {
        const { error } = await supabase
          .from('about_accordion')
          .update({ order_index: update.order_index })
          .eq('id', update.id);

        if (error) {
          toast({ title: 'Error', description: 'Failed to update order', variant: 'destructive' });
          fetchAllData();
          return;
        }
      }

      toast({ title: 'Success', description: 'About order updated' });
    }
  };

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

  const createFounderProfile = async () => {
    const { error } = await supabase.from('founder_profile').insert([newFounder]);

    if (error) {
      toast({ title: 'Error', description: 'Failed to create profile', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Profile created successfully' });
      setNewFounder({ name: '', title: '', quote: '', video_url: '' });
      fetchAllData();
    }
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

  const deleteFounderProfile = async () => {
    if (!founderProfile) return;

    const { error } = await supabase.from('founder_profile').delete().eq('id', founderProfile.id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to delete profile', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Profile deleted successfully' });
      setFounderProfile(null);
      fetchAllData();
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

  const addCompanyInfo = async () => {
    const { error } = await supabase.from('company_info').insert([newInfo]);

    if (error) {
      toast({ title: 'Error', description: 'Failed to add section info', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Section info added successfully' });
      setNewInfo({ section: '', heading: '', subheading: '', video_url: '' });
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

  const deleteCompanyInfo = async (id: string) => {
    const { error } = await supabase.from('company_info').delete().eq('id', id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to delete section info', variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Section info deleted successfully' });
      fetchAllData();
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Homepage Content</h2>
        <Button
          variant={showPreview ? "default" : "outline"}
          onClick={() => setShowPreview(!showPreview)}
          className="gap-2"
        >
          {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showPreview ? "Hide Preview" : "Show Preview"}
        </Button>
      </div>
      
      <Tabs defaultValue="founder" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="founder">Founder Profile</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="sections">Section Info</TabsTrigger>
        </TabsList>

      <TabsContent value="founder" className="space-y-4">
        {!founderProfile ? (
          <Card>
            <CardHeader>
              <CardTitle>Create Founder Profile</CardTitle>
              <CardDescription>No profile exists. Create one to get started.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input
                  value={newFounder.name}
                  onChange={(e) => setNewFounder({ ...newFounder, name: e.target.value })}
                  placeholder="Enter founder name"
                />
              </div>
              <div>
                <Label>Title</Label>
                <Input
                  value={newFounder.title}
                  onChange={(e) => setNewFounder({ ...newFounder, title: e.target.value })}
                  placeholder="Enter title/role"
                />
              </div>
              <div>
                <Label>Quote</Label>
                <Textarea
                  value={newFounder.quote}
                  onChange={(e) => setNewFounder({ ...newFounder, quote: e.target.value })}
                  placeholder="Enter a quote or tagline"
                  rows={3}
                />
              </div>
              <ImageUpload
                value={newFounder.video_url}
                onChange={(url) => setNewFounder({ ...newFounder, video_url: url })}
                label="Profile Image / Video URL"
                folder="founder"
              />
              <Button onClick={createFounderProfile}>
                <Plus className="w-4 h-4 mr-2" />
                Create Profile
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Founder Profile</CardTitle>
              <CardDescription>Manage founder information and bio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
              <ImageUpload
                value={founderProfile.video_url || ''}
                onChange={(url) => setFounderProfile({ ...founderProfile, video_url: url })}
                label="Profile Image / Video URL"
                folder="founder"
              />
              <div className="flex gap-2">
                <Button onClick={updateFounderProfile}>
                  <Save className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
                <Button variant="destructive" onClick={deleteFounderProfile}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
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
            {newGallery.media_type === 'image' ? (
              <ImageUpload
                value={newGallery.media_url}
                onChange={(url) => setNewGallery({ ...newGallery, media_url: url })}
                label="Media"
                folder="gallery"
              />
            ) : (
              <div>
                <Label>Video URL</Label>
                <Input
                  value={newGallery.media_url}
                  onChange={(e) => setNewGallery({ ...newGallery, media_url: e.target.value })}
                  placeholder="Enter video URL"
                />
              </div>
            )}
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
            <CardDescription>Drag items to reorder them</CardDescription>
          </CardHeader>
          <CardContent>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleGalleryDragEnd}
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10"></TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <SortableContext
                    items={galleryItems.map((item) => item.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {galleryItems.map((item) => (
                      <SortableGalleryRow
                        key={item.id}
                        item={item}
                        isEditing={editingGallery?.id === item.id}
                        editingGallery={editingGallery}
                        onEdit={setEditingGallery}
                        onSave={updateGalleryItem}
                        onCancel={() => setEditingGallery(null)}
                        onDelete={deleteGalleryItem}
                        onEditChange={setEditingGallery}
                      />
                    ))}
                  </SortableContext>
                </TableBody>
              </Table>
            </DndContext>
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
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleAboutDragEnd}
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10"></TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <SortableContext
                    items={aboutItems.map((item) => item.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {aboutItems.map((item) => (
                      <SortableAboutRow
                        key={item.id}
                        item={item}
                        isEditing={editingAbout?.id === item.id}
                        editingAbout={editingAbout}
                        onEdit={setEditingAbout}
                        onSave={updateAboutItem}
                        onCancel={() => setEditingAbout(null)}
                        onDelete={deleteAboutItem}
                        onEditChange={setEditingAbout}
                      />
                    ))}
                  </SortableContext>
                </TableBody>
              </Table>
            </DndContext>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="sections" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Add Section Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Section Name</Label>
                <Input
                  value={newInfo.section}
                  onChange={(e) => setNewInfo({ ...newInfo, section: e.target.value })}
                  placeholder="e.g., about, hero, gallery"
                />
              </div>
              <div>
                <Label>Video URL (optional)</Label>
                <Input
                  value={newInfo.video_url}
                  onChange={(e) => setNewInfo({ ...newInfo, video_url: e.target.value })}
                  placeholder="Enter video URL"
                />
              </div>
            </div>
            <div>
              <Label>Heading</Label>
              <Input
                value={newInfo.heading}
                onChange={(e) => setNewInfo({ ...newInfo, heading: e.target.value })}
                placeholder="Enter section heading"
              />
            </div>
            <div>
              <Label>Subheading</Label>
              <Textarea
                value={newInfo.subheading}
                onChange={(e) => setNewInfo({ ...newInfo, subheading: e.target.value })}
                placeholder="Enter section subheading"
                rows={2}
              />
            </div>
            <Button onClick={addCompanyInfo}>
              <Plus className="w-4 h-4 mr-2" />
              Add Section
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Section Information</CardTitle>
            <CardDescription>Manage headings, subheadings, and media for each section</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Heading</TableHead>
                  <TableHead>Subheading</TableHead>
                  <TableHead>Video URL</TableHead>
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
                          <Input
                            value={editingInfo.heading}
                            onChange={(e) => setEditingInfo({ ...editingInfo, heading: e.target.value })}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={editingInfo.subheading}
                            onChange={(e) => setEditingInfo({ ...editingInfo, subheading: e.target.value })}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            value={editingInfo.video_url || ''}
                            onChange={(e) => setEditingInfo({ ...editingInfo, video_url: e.target.value })}
                            placeholder="Video URL"
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
                        <TableCell className="max-w-xs truncate">{info.heading}</TableCell>
                        <TableCell className="max-w-xs truncate">{info.subheading}</TableCell>
                        <TableCell className="max-w-xs truncate">{info.video_url || '-'}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setEditingInfo(info)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => deleteCompanyInfo(info.id)}>
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

    <PreviewPanel
      isOpen={showPreview}
      onClose={() => setShowPreview(false)}
      previewData={{
        founderProfile,
        features,
        galleryItems,
        aboutItems,
        companyInfo,
      }}
    />
    </>
  );
};

export default AdminHomepageContent;
