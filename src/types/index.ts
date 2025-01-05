export interface Room {
  id: string;
  name: string;
  capacity: number;
  floor: number;
  amenities: string[];
  isBooked: boolean;
}

export interface Desk {
  id: string;
  number: string;
  floor: number;
  isStanding: boolean;
  hasMonitor: boolean;
  isBooked: boolean;
}

export enum ResourceType {
  Room,
  Desk
}

export interface Booking {
  id: string;
  resourceId: string;
  resourceType: ResourceType;
  userId: string;
  startTime: Date;
  endTime: Date;
}