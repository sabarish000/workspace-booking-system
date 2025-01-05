export enum Tabs {
  Rooms,
  Desks
}

interface TabViewProps {
  activeTab: Tabs;
  onTabChange: (tab: Tabs) => void;
}

export function TabView({ activeTab, onTabChange }: TabViewProps) {
  return (
    <div className="flex space-x-1 rounded-xl bg-gray-200 p-1">
      <button
        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
          activeTab === Tabs.Rooms
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => onTabChange(Tabs.Rooms)}
      >
        Meeting Rooms
      </button>
      <button
        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
          activeTab === Tabs.Desks
            ? 'bg-white text-blue-600 shadow'
            : 'text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => onTabChange(Tabs.Desks)}
      >
        Desk Spaces
      </button>
    </div>
  );
}