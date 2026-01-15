import { create } from "zustand";

export interface IToggleState {
  toggle: boolean;
  setToggle: (value: boolean) => void;

  notifications: boolean;
  setNotifications: (value: boolean) => void;
}

export const useToggleStore = create<IToggleState>((set) => ({
  toggle: false,
  setToggle: (value: boolean) => set({ toggle: value }),

  notifications: false,
  setNotifications: (value: boolean) => set({ notifications: value }),
}));
