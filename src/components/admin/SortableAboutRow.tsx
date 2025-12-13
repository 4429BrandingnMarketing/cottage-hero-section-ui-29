import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Edit, Trash2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TableRow, TableCell } from '@/components/ui/table';

interface AboutItem {
  id: string;
  title: string;
  content: string;
  order_index: number;
}

interface SortableAboutRowProps {
  item: AboutItem;
  isEditing: boolean;
  editingAbout: AboutItem | null;
  onEdit: (item: AboutItem) => void;
  onSave: (item: AboutItem) => void;
  onCancel: () => void;
  onDelete: (id: string) => void;
  onEditChange: (item: AboutItem) => void;
}

export function SortableAboutRow({
  item,
  isEditing,
  editingAbout,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onEditChange,
}: SortableAboutRowProps) {
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
      {isEditing && editingAbout ? (
        <>
          <TableCell>
            <Input
              value={editingAbout.title}
              onChange={(e) => onEditChange({ ...editingAbout, title: e.target.value })}
            />
          </TableCell>
          <TableCell>
            <Input
              type="number"
              value={editingAbout.order_index}
              onChange={(e) => onEditChange({ ...editingAbout, order_index: parseInt(e.target.value) })}
            />
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => onSave(editingAbout)}>
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
          <TableCell>{item.title}</TableCell>
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
