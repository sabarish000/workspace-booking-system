import React from 'react';

interface TabViewProps {
  activeTab: 'rooms' | 'desks';
  onTabChange: (tab: 'rooms' | 'desks') => void;
}

export function TabView({ activeTab, onTabChange }: TabViewProps) {
  return (
    <div className="flex space-x-1 rounded-xl bg-gray-200 p-1">
      <button
        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
          activeTab === 'rooms'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => onTabChange('rooms')}
      >
        Meeting Rooms
      </button>
      <button
        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
          activeTab === 'desks'
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => onTabChange('desks')}
      >
        Desk Spaces
      </button>
    </div>
  );
}