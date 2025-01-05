import { useEffect, useState } from 'react';
import { Building } from 'lucide-react';
import { Tabs, TabView } from './components/TabView';
import { ResourceCard } from './components/ResourceCard';
import { Filters } from './components/Filters';
import { Desk, ResourceType, Room } from './types';
import { bookingService } from './api/bookingService';


function App() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Rooms);
  const [searchQuery, setSearchQuery] = useState('');
  const [minCapacity, setMinCapacity] = useState(0);
  const [searchFloor, setSearchFloor] = useState(0);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [resources, setResources] = useState<(Room | Desk)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResources() {
      setLoading(true);
      try {
        const data = await (activeTab === Tabs.Rooms
          ? bookingService.getRooms()
          : bookingService.getDesks());
        setResources(data);
      } catch (error) {
        console.error('Failed to fetch resources:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchResources();
  }, [activeTab]);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleBook = async (id: string) => {
    console.log(`Booking resource with id: ${id}`);
    try {
      // resources.find(resource => resource.id === id)!.isBooked = true;
      await bookingService.createBooking({
        resourceId: id,
        resourceType: activeTab === Tabs.Rooms ? ResourceType.Room : ResourceType.Desk,
        userId: 'user1', // In a real app, this would come from auth
        startTime: new Date(),
        endTime: new Date(Date.now() + 3600000), // 1 hour from now
      });
      // Refresh resources after booking
      const updatedResources = await (activeTab === Tabs.Rooms
        ? bookingService.getRooms()
        : bookingService.getDesks());
      setResources(updatedResources);
    } catch (error) {
      // resources.find(resource => resource.id === id)!.isBooked = false;
      console.error('Failed to create booking:', error);
    }
  };

  const filteredResources = activeTab === Tabs.Rooms
    ? resources.filter(resource => 
        (!showAvailableOnly || !resource.isBooked) &&
        'capacity' in resource  && // Check if room is a Room
        (resource.name.toLowerCase().includes(searchQuery) ||
         resource.floor.toString().includes(searchQuery)) &&
         (!searchFloor || resource.floor == searchFloor) &&
        resource.capacity >= minCapacity
      )
    : resources.filter(desk =>
        'number' in desk && // check if desk is a Desk
        (desk.number.toLowerCase().includes(searchQuery) ||
        desk.floor.toString().includes(searchQuery)) &&
        (!searchFloor || desk.floor == searchFloor) &&
        (!showAvailableOnly || !desk.isBooked)
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
            showAvailableOnly={showAvailableOnly}
            onAvailabilityFilterChange={setShowAvailableOnly}
            activeTab={activeTab}
          />
          { loading ?
          (<div className="text-center py-8 text-gray-500">Loading...</div>) : 
          (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                type={activeTab}
                onBook={() => handleBook(resource.id)}
              />
            ))}
          </div>)}
        </div>
      </main>
    </div>
  );
}

export default App;