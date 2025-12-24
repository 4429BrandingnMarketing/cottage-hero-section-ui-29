import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Edit, Trash2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TableCell, TableRow } from '@/components/ui/table';

interface MarketingStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

interface SortableMarketingStatRowProps {
  stat: MarketingStat;
  isEditing: boolean;
  editingData: MarketingStat | null;
  onEditStart: () => void;
  onEditChange: (data: MarketingStat) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

export function SortableMarketingStatRow({
  stat,
  isEditing,
  editingData,
  onEditStart,
  onEditChange,
  onSave,
  onCancel,
  onDelete,
}: SortableMarketingStatRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: stat.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <TableRow ref={setNodeRef} style={style}>
      <TableCell>
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab p-1 hover:bg-muted rounded"
        >
          <GripVertical className="h-4 w-4 text-muted-foreground" />
        </button>
      </TableCell>
      {isEditing && editingData ? (
        <>
          <TableCell>
            <Input
              value={editingData.value}
              onChange={(e) => onEditChange({ ...editingData, value: e.target.value })}
            />
          </TableCell>
          <TableCell>
            <Input
              value={editingData.label}
              onChange={(e) => onEditChange({ ...editingData, label: e.target.value })}
            />
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button size="sm" onClick={onSave}><Save className="w-4 h-4" /></Button>
              <Button size="sm" variant="outline" onClick={onCancel}><X className="w-4 h-4" /></Button>
            </div>
          </TableCell>
        </>
      ) : (
        <>
          <TableCell className="font-medium">{stat.value}</TableCell>
          <TableCell>{stat.label}</TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={onEditStart}><Edit className="w-4 h-4" /></Button>
              <Button size="sm" variant="destructive" onClick={onDelete}><Trash2 className="w-4 h-4" /></Button>
            </div>
          </TableCell>
        </>
      )}
    </TableRow>
  );
}
