import { Users } from 'lucide-react';

interface CapacityFilterProps {
  capacity: number;
  onCapacityChange: (capacity: number) => void;
}

export function CapacityFilter({ capacity, onCapacityChange }: CapacityFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4 text-gray-500" />
        <span className="text-sm text-gray-600">Min Capacity:</span>
      </div>
      <select
        value={capacity}
        onChange={(e) => onCapacityChange(Number(e.target.value))}
        className="rounded-lg border border-gray-300 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value={0}>Any</option>
        <option value={2}>2+</option>
        <option value={4}>4+</option>
        <option value={6}>6+</option>
        <option value={8}>8+</option>
        <option value={10}>10+</option>
      </select>
    </div>
  );
}