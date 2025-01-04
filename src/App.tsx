import React, { useState } from 'react';
import { Building } from 'lucide-react';
import { TabView } from './components/TabView';
import { ResourceCard } from './components/ResourceCard';
import { desks, rooms } from './mock-data';
import { Filters } from './components/Filters';


function App() {
  const [activeTab, setActiveTab] = useState<'rooms' | 'desks'>('rooms');
  const [searchQuery, setSearchQuery] = useState('');
  const [minCapacity, setMinCapacity] = useState(0);
  const [searchFloor, setSearchFloor] = useState(0);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleBook = (id: string) => {
    // TODO: Implement booking logic
    console.log(`Booking resource with id: ${id}`);
  };

  const filteredResources = activeTab === 'rooms'
    ? rooms.filter(room => 
        (room.name.toLowerCase().includes(searchQuery) ||
         room.floor.toString().includes(searchQuery)) &&
        room.capacity >= minCapacity &&
        (!searchFloor || room.floor == searchFloor)
      )
    : desks.filter(desk =>
        (desk.number.toLowerCase().includes(searchQuery) ||
        desk.floor.toString().includes(searchQuery)) &&
        (!searchFloor || desk.floor == searchFloor)
      );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-900">Workplace Booking</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <TabView activeTab={activeTab} onTabChange={setActiveTab} />
          
          <Filters
            searchQuery={searchQuery}
            onSearch={handleSearch}
            capacity={minCapacity}
            onCapacityChange={setMinCapacity}
            floor={searchFloor}
            onFloorChange={setSearchFloor}
            activeTab={activeTab}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                type={activeTab}
                onBook={() => handleBook(resource.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;