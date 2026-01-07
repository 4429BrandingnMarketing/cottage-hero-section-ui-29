import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GripVertical, Edit, Trash2, Save, X } from 'lucide-react';

interface RadioStat {
  id: string;
  value: string;
  label: string;
  order_index: number;
}

interface Props {
  stat: RadioStat;
  isEditing: boolean;
  editingData: RadioStat | null;
  onEditStart: () => void;
  onEditChange: (data: RadioStat) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

export const SortableRadioStatRow = ({
  stat,
  isEditing,
  editingData,
  onEditStart,
  onEditChange,
  onSave,
  onCancel,
  onDelete,
}: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: stat.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow ref={setNodeRef} style={style}>
      <TableCell>
        <span {...attributes} {...listeners} className="cursor-grab">
          <GripVertical className="w-4 h-4 text-muted-foreground" />
        </span>
      </TableCell>
      {isEditing && editingData ? (
        <>
          <TableCell>
            <Input value={editingData.value} onChange={(e) => onEditChange({ ...editingData, value: e.target.value })} />
          </TableCell>
          <TableCell>
            <Input value={editingData.label} onChange={(e) => onEditChange({ ...editingData, label: e.target.value })} />
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
          <TableCell>{stat.value}</TableCell>
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
};
