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

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  year: string;
  image_url: string;
  video_url: string | null;
  aspect: string;
  order_index: number;
}

const aspectOptions = [
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-2',
  'col-span-2 row-span-2',
];

interface Props {
  item: PortfolioItem;
  isEditing: boolean;
  editingData: PortfolioItem | null;
  onEditStart: () => void;
  onEditChange: (item: PortfolioItem) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

export function SortableTVPortfolioRow({
  item, isEditing, editingData, onEditStart, onEditChange, onSave, onCancel, onDelete,
}: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <TableRow ref={setNodeRef} style={style} className={isDragging ? 'bg-muted' : ''}>
      <TableCell className="w-10">
        <button {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-1 hover:bg-muted rounded">
          <GripVertical className="w-4 h-4 text-muted-foreground" />
        </button>
      </TableCell>
      {isEditing && editingData ? (
        <>
          <TableCell>
            <Input value={editingData.title} onChange={(e) => onEditChange({ ...editingData, title: e.target.value })} />
          </TableCell>
          <TableCell>
            <Input value={editingData.category} onChange={(e) => onEditChange({ ...editingData, category: e.target.value })} />
          </TableCell>
          <TableCell>
            <Input value={editingData.year} onChange={(e) => onEditChange({ ...editingData, year: e.target.value })} />
          </TableCell>
          <TableCell>
            <Input value={editingData.image_url} onChange={(e) => onEditChange({ ...editingData, image_url: e.target.value })} />
          </TableCell>
          <TableCell>
            <Input value={editingData.video_url || ''} onChange={(e) => onEditChange({ ...editingData, video_url: e.target.value || null })} />
          </TableCell>
          <TableCell>
            <Select value={editingData.aspect} onValueChange={(val) => onEditChange({ ...editingData, aspect: val })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {aspectOptions.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
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
          <TableCell className="font-medium">{item.title}</TableCell>
          <TableCell>{item.category}</TableCell>
          <TableCell>{item.year}</TableCell>
          <TableCell className="max-w-[120px] truncate text-xs">{item.image_url}</TableCell>
          <TableCell className="max-w-[120px] truncate text-xs">{item.video_url || '—'}</TableCell>
          <TableCell className="text-xs">{item.aspect}</TableCell>
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
