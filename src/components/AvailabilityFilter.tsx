import { Clock } from 'lucide-react';

interface AvailabilityFilterProps {
  showAvailableOnly: boolean;
  onAvailabilityFilterChange: (showAvailableOnly: boolean) => void;
}

export function AvailabilityFilter({ showAvailableOnly, onAvailabilityFilterChange }: AvailabilityFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <Clock className="h-4 w-4 text-gray-500" />
      <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
        <input
          type="checkbox"
          checked={showAvailableOnly}
          onChange={(e) => onAvailabilityFilterChange(e.target.checked)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        Show available only
      </label>
    </div>
  );
}