import { Building } from 'lucide-react';

interface FloorFilterProps {
  floor: number;
  onFloorChange: (floor: number) => void;
}

export function FloorFilter({ floor, onFloorChange }: FloorFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <Building className="h-4 w-4 text-gray-500"/>
        <span className="text-sm text-gray-600">Floor number:</span>
      </div>
      <select
        value={floor}
        onChange={(e) => onFloorChange(Number(e.target.value))}
        className="rounded-lg border border-gray-300 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value={0}>Any</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </div>
  );
}