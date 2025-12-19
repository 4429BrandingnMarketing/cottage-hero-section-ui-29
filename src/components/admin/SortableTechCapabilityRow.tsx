import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Edit, Trash2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TableRow, TableCell } from '@/components/ui/table';

interface TechnologyCapability {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  order_index: number;
}

interface SortableTechCapabilityRowProps {
  item: TechnologyCapability;
  isEditing: boolean;
  editingItem: TechnologyCapability | null;
  iconOptions: string[];
  onEdit: (item: TechnologyCapability) => void;
  onSave: (item: TechnologyCapability) => void;
  onCancel: () => void;
  onDelete: (id: string) => void;
  onEditChange: (item: TechnologyCapability) => void;
}

export function SortableTechCapabilityRow({
  item,
  isEditing,
  editingItem,
  iconOptions,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onEditChange,
}: SortableTechCapabilityRowProps) {
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
      {isEditing && editingItem ? (
        <>
          <TableCell>
            <Input
              value={editingItem.title}
              onChange={(e) => onEditChange({ ...editingItem, title: e.target.value })}
            />
          </TableCell>
          <TableCell>
            <select
              className="h-10 px-3 border rounded-md bg-background"
              value={editingItem.icon}
              onChange={(e) => onEditChange({ ...editingItem, icon: e.target.value })}
            >
              {iconOptions.map(icon => (
                <option key={icon} value={icon}>{icon}</option>
              ))}
            </select>
          </TableCell>
          <TableCell>
            <Input
              value={editingItem.features.join(', ')}
              onChange={(e) => onEditChange({ 
                ...editingItem, 
                features: e.target.value.split(',').map(f => f.trim()).filter(f => f) 
              })}
            />
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => onSave(editingItem)}>
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
          <TableCell className="font-medium">{item.title}</TableCell>
          <TableCell>{item.icon}</TableCell>
          <TableCell className="max-w-xs truncate">{item.features.join(', ')}</TableCell>
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
