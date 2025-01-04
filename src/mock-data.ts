import { Desk, Room } from "./types";

// Mock data
export const rooms: Room[] = [
  {
    id: "1",
    name: "Everest",
    capacity: 8,
    floor: 2,
    amenities: ["TV", "Whiteboard"],
    isBooked: false,
  },
  {
    id: "2",
    name: "Kilimanjaro",
    capacity: 4,
    floor: 2,
    amenities: ["TV"],
    isBooked: true,
  },
  {
    id: "3",
    name: "Denali",
    capacity: 6,
    floor: 3,
    amenities: ["Projector", "TV"],
    isBooked: false,
  },
  {
    id: "4",
    name: "Elbrus",
    capacity: 10,
    floor: 1,
    amenities: ["Whiteboard", "TV"],
    isBooked: true,
  },
  {
    id: "5",
    name: "Aconcagua",
    capacity: 12,
    floor: 2,
    amenities: ["TV", "Conference Phone"],
    isBooked: false,
  },
  {
    id: "6",
    name: "Matterhorn",
    capacity: 5,
    floor: 1,
    amenities: ["Whiteboard"],
    isBooked: true,
  },
  {
    id: "7",
    name: "Makalu",
    capacity: 4,
    floor: 3,
    amenities: ["TV", "Video Conferencing"],
    isBooked: false,
  },
  {
    id: "8",
    name: "Olympus",
    capacity: 8,
    floor: 2,
    amenities: ["Projector", "Whiteboard"],
    isBooked: true,
  },
  {
    id: "9",
    name: "Blanc",
    capacity: 6,
    floor: 1,
    amenities: ["TV", "Whiteboard"],
    isBooked: false,
  },
  {
    id: "10",
    name: "Vinson",
    capacity: 10,
    floor: 3,
    amenities: ["Conference Phone", "TV"],
    isBooked: true,
  },
  {
    id: "11",
    name: "Zermatt",
    capacity: 1,
    floor: 2,
    amenities: ["Desk", "Chair", "Power Outlet"],
    isBooked: false,
  },
  {
    id: "12",
    name: "Sumantri",
    capacity: 1,
    floor: 2,
    amenities: ["Desk", "Chair"],
    isBooked: true,
  },
  {
    id: "13",
    name: "Emin",
    capacity: 1,
    floor: 1,
    amenities: ["Desk", "Chair", "Power Outlet"],
    isBooked: false,
  },
  {
    id: "14",
    name: "Pissis",
    capacity: 1,
    floor: 1,
    amenities: ["Desk", "Chair"],
    isBooked: true,
  },
  {
    id: "15",
    name: "Kosciuszko",
    capacity: 1,
    floor: 3,
    amenities: ["Desk", "Chair", "Power Outlet"],
    isBooked: false,
  },
];
  
  export const desks: Desk[] = [
    {
      id: '1',
      number: 'F1-1',
      floor: 1,
      isStanding: true,
      hasMonitor: true,
      isBooked: false,
    },
    {
      id: '2',
      number: 'F1-2',
      floor: 1,
      isStanding: false,
      hasMonitor: true,
      isBooked: true,
    },
    {
      id: '3',
      number: 'F2-1',
      floor: 2,
      isStanding: true,
      hasMonitor: true,
      isBooked: false,
    },
    {
      id: '4',
      number: 'F2-2',
      floor: 2,
      isStanding: false,
      hasMonitor: true,
      isBooked: true,
    },
    {
      id: '5',
      number: 'F3-1',
      floor: 3,
      isStanding: true,
      hasMonitor: true,
      isBooked: false,
    },
    {
      id: '6',
      number: 'F3-2',
      floor: 3,
      isStanding: false,
      hasMonitor: true,
      isBooked: true,
    },
    {
      id: '7',
      number: 'F3-3',
      floor: 3,
      isStanding: true,
      hasMonitor: true,
      isBooked: false,
    },
    {
      id: '8',
      number: 'F3-4',
      floor: 3,
      isStanding: false,
      hasMonitor: true,
      isBooked: true,
    },
  ];