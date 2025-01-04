import { SearchBar } from './SearchBar';
import { CapacityFilter } from './CapacityFilter';
import { FloorFilter } from './FloorFilter';

interface FiltersProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  capacity: number;
  onCapacityChange: (capacity: number) => void;
  floor: number;
  onFloorChange: (floor: number) => void;
  activeTab: 'rooms' | 'desks';
}

export function Filters({ searchQuery, onSearch, capacity, onCapacityChange, floor, onFloorChange, activeTab }: FiltersProps) {
  return (
    <div className="space-y-4">
      <SearchBar
        value={searchQuery}
        onSearch={onSearch}
        placeholder={`Search ${activeTab === 'rooms' ? 'meeting rooms' : 'desk spaces'}...`}
      />
      <div className="flex flex-row items-center justify-between">
        {(
            <FloorFilter
                floor={floor}
                onFloorChange={onFloorChange}
            />
        )}
        {activeTab === 'rooms' && (
            <CapacityFilter
            capacity={capacity}
            onCapacityChange={onCapacityChange}
            />
        )}
      </div>
    </div>
  );
}