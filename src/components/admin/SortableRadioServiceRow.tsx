import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GripVertical, Edit, Trash2, Save, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const iconOptions = ['Podcast', 'Radio', 'Mic', 'Share2', 'Headphones', 'Music'];

interface RadioService {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

interface Props {
  service: RadioService;
  isEditing: boolean;
  editingData: RadioService | null;
  onEditStart: () => void;
  onEditChange: (data: RadioService) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

export const SortableRadioServiceRow = ({
  service,
  isEditing,
  editingData,
  onEditStart,
  onEditChange,
  onSave,
  onCancel,
  onDelete,
}: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: service.id });

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
            <Input value={editingData.title} onChange={(e) => onEditChange({ ...editingData, title: e.target.value })} />
          </TableCell>
          <TableCell>
            <Textarea value={editingData.description} onChange={(e) => onEditChange({ ...editingData, description: e.target.value })} rows={1} />
          </TableCell>
          <TableCell>
            <Select value={editingData.icon} onValueChange={(val) => onEditChange({ ...editingData, icon: val })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {iconOptions.map((icon) => (
                  <SelectItem key={icon} value={icon}>{icon}</SelectItem>
                ))}
              </SelectContent>
            </Select>
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
          <TableCell>{service.title}</TableCell>
          <TableCell className="max-w-xs truncate">{service.description}</TableCell>
          <TableCell>{service.icon}</TableCell>
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
