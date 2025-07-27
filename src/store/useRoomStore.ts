import { create } from "zustand";

type Room = "main" | "personal" | "professional";

interface RoomState {
  currentRoom: Room;
  setRoom: (room: Room) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
  currentRoom: "main",
  setRoom: (room) => set({ currentRoom: room }),
}));
