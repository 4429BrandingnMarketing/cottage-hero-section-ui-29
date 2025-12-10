import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Edit, Trash2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TableRow, TableCell } from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface GalleryItem {
  id: string;
  title: string | null;
  media_type: string;
  media_url: string;
  order_index: number;
  description?: string | null;
}

interface SortableGalleryRowProps {
  item: GalleryItem;
  isEditing: boolean;
  editingGallery: GalleryItem | null;
  onEdit: (item: GalleryItem) => void;
  onSave: (item: GalleryItem) => void;
  onCancel: () => void;
  onDelete: (id: string) => void;
  onEditChange: (item: GalleryItem) => void;
}

export function SortableGalleryRow({
  item,
  isEditing,
  editingGallery,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onEditChange,
}: SortableGalleryRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <TableRow ref={setNodeRef} style={style} className={isDragging ? 'bg-muted' : ''}>
      <TableCell className="w-10">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-1 hover:bg-muted rounded"
        >
          <GripVertical className="w-4 h-4 text-muted-foreground" />
        </button>
      </TableCell>
      {isEditing && editingGallery ? (
        <>
          <TableCell>
            <Input
              value={editingGallery.title || ''}
              onChange={(e) => onEditChange({ ...editingGallery, title: e.target.value })}
            />
          </TableCell>
          <TableCell>
            <Select
              value={editingGallery.media_type}
              onValueChange={(value) => onEditChange({ ...editingGallery, media_type: value })}
            >
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
              onChange={(e) => onEditChange({ ...editingGallery, order_index: parseInt(e.target.value) })}
            />
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => onSave(editingGallery)}>
                <Save className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={onCancel}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>{item.title || 'Untitled'}</TableCell>
          <TableCell>{item.media_type}</TableCell>
          <TableCell>{item.order_index}</TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => onEdit(item)}>
                <Edit className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="destructive" onClick={() => onDelete(item.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </TableCell>
        </>
      )}
    </TableRow>
  );
}
