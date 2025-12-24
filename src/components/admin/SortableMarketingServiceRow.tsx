import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Edit, Trash2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TableCell, TableRow } from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const iconOptions = ['Target', 'TrendingUp', 'Globe', 'BarChart3', 'Megaphone', 'Users'];

interface MarketingService {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

interface SortableMarketingServiceRowProps {
  service: MarketingService;
  isEditing: boolean;
  editingData: MarketingService | null;
  onEditStart: () => void;
  onEditChange: (data: MarketingService) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

export function SortableMarketingServiceRow({
  service,
  isEditing,
  editingData,
  onEditStart,
  onEditChange,
  onSave,
  onCancel,
  onDelete,
}: SortableMarketingServiceRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: service.id });

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
              value={editingData.title}
              onChange={(e) => onEditChange({ ...editingData, title: e.target.value })}
            />
          </TableCell>
          <TableCell>
            <Textarea
              value={editingData.description}
              onChange={(e) => onEditChange({ ...editingData, description: e.target.value })}
              rows={1}
            />
          </TableCell>
          <TableCell>
            <Select
              value={editingData.icon}
              onValueChange={(val) => onEditChange({ ...editingData, icon: val })}
            >
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
          <TableCell className="font-medium">{service.title}</TableCell>
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
}
