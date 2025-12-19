import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Edit, Trash2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TableRow, TableCell } from '@/components/ui/table';

interface TechnologyStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

interface SortableTechStatRowProps {
  item: TechnologyStat;
  isEditing: boolean;
  editingItem: TechnologyStat | null;
  onEdit: (item: TechnologyStat) => void;
  onSave: (item: TechnologyStat) => void;
  onCancel: () => void;
  onDelete: (id: string) => void;
  onEditChange: (item: TechnologyStat) => void;
}

export function SortableTechStatRow({
  item,
  isEditing,
  editingItem,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onEditChange,
}: SortableTechStatRowProps) {
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
              value={editingItem.value}
              onChange={(e) => onEditChange({ ...editingItem, value: e.target.value })}
            />
          </TableCell>
          <TableCell>
            <Input
              value={editingItem.label}
              onChange={(e) => onEditChange({ ...editingItem, label: e.target.value })}
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
          <TableCell className="font-medium">{item.value}</TableCell>
          <TableCell>{item.label}</TableCell>
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
