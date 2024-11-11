import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseRoomNumber(roomNumber: string) {
  const building = roomNumber.match(/[a-zA-Z]+/)?.[0] || "";
  const room = roomNumber.match(/\d+/)?.[0] || "";
  const floor = room ? room.charAt(0) : "";

  return { building, room, floor };
}