import { SearchBar } from './SearchBar';
import { CapacityFilter } from './CapacityFilter';
import { FloorFilter } from './FloorFilter';
import { Tabs } from './TabView';

interface FiltersProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  capacity: number;
  onCapacityChange: (capacity: number) => void;
  floor: number;
  onFloorChange: (floor: number) => void;
  activeTab: Tabs;
}

export function Filters({ searchQuery, onSearch, capacity, onCapacityChange, floor, onFloorChange, activeTab }: FiltersProps) {
  return (
    <div className="space-y-4">
      <SearchBar
        value={searchQuery}
        onSearch={onSearch}
        placeholder={`Search ${activeTab === Tabs.Rooms ? 'meeting rooms' : 'desk spaces'}...`}
      />
      <div className="flex flex-row items-center justify-between">
        {(
            <FloorFilter
                floor={floor}
                onFloorChange={onFloorChange}
            />
        )}
        {activeTab === Tabs.Rooms && (
            <CapacityFilter
            capacity={capacity}
            onCapacityChange={onCapacityChange}
            />
        )}
      </div>
    </div>
  );
}