
import { type Room, type Desk, type Booking, ResourceType } from '../types';
import { getMockData } from './mock-data';

let mockDataStore = getMockData();

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const bookingService = {
  // Rooms
  async getRooms(): Promise<Room[]> {
    await delay(500);
    return [...mockDataStore.rooms];
  },

  async getRoom(id: string): Promise<Room | undefined> {
    await delay(300);
    return mockDataStore.rooms.find(room => room.id === id);
  },

  // Desks
  async getDesks(): Promise<Desk[]> {
    await delay(500);
    return mockDataStore.desks;
  },

  async getDesk(id: string): Promise<Desk | undefined> {
    await delay(300);
    return mockDataStore.desks.find(desk => desk.id === id);
  },

  // Bookings
  async createBooking(booking: Omit<Booking, 'id'>): Promise<Booking> {
    await delay(700);
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
    };
    // Update data store with new state
    mockDataStore = {
        ...mockDataStore,
        bookings: [...mockDataStore.bookings, newBooking],
        rooms: mockDataStore.rooms.map(room =>
          room.id === booking.resourceId && booking.resourceType === ResourceType.Room
            ? { ...room, isBooked: true }
            : room
        ),
        desks: mockDataStore.desks.map(desk =>
          desk.id === booking.resourceId && booking.resourceType === ResourceType.Desk
            ? { ...desk, isBooked: true }
            : desk
        ),
      };
    return newBooking;
  },
};