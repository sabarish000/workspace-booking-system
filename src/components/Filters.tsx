import { SearchBar } from './SearchBar';
import { CapacityFilter } from './CapacityFilter';
import { FloorFilter } from './FloorFilter';
import { Tabs } from './TabView';
import { AvailabilityFilter } from './AvailabilityFilter';

interface FiltersProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  capacity: number;
  onCapacityChange: (capacity: number) => void;
  floor: number;
  onFloorChange: (floor: number) => void;
  activeTab: Tabs;
  showAvailableOnly: boolean;
  onAvailabilityFilterChange: (showAvailableOnly: boolean)  => void;
}

export function Filters({ searchQuery, onSearch, capacity, onCapacityChange, floor, onFloorChange,
  showAvailableOnly, onAvailabilityFilterChange: onAvailabilityFilterChange, activeTab }: FiltersProps) {
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
        <AvailabilityFilter
          showAvailableOnly={showAvailableOnly}
          onAvailabilityFilterChange={onAvailabilityFilterChange}
        />
      </div>
    </div>
  );
}