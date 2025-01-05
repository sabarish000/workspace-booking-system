import { Monitor, Users, ArrowUpDown } from 'lucide-react';
import type { Room, Desk } from '../types';
import { Tabs } from './TabView';

interface ResourceCardProps {
  resource: Room | Desk;
  type: Tabs;
  onBook: () => void;
}

export function ResourceCard({ resource, type, onBook }: ResourceCardProps) {
  const isRoom = type === Tabs.Rooms;
  const room = resource as Room;
  const desk = resource as Desk;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">
            {isRoom ? room.name : `Desk ${desk.number}`}
          </h3>
          <p className="text-gray-600">Floor {resource.floor}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-sm ${
          resource.isBooked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
        }`}>
          {resource.isBooked ? 'Booked' : 'Available'}
        </span>
      </div>
      
      <div className="flex gap-4 mb-4">
        {isRoom ? (
          <>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Capacity: {room.capacity}</span>
            </div>
          </>
        ) : (
          <>
            {desk.hasMonitor && (
              <div className="flex items-center gap-1">
                <Monitor className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Monitor</span>
              </div>
            )}
            {desk.isStanding && (
              <div className="flex items-center gap-1">
                <ArrowUpDown className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Standing</span>
              </div>
            )}
          </>
        )}
      </div>

      <button
        onClick={onBook}
        disabled={resource.isBooked}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        {resource.isBooked ? 'Unavailable' : 'Book Now'}
      </button>
    </div>
  );
}