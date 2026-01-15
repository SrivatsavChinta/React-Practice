import { create } from "zustand";

export interface ITimeState {
  hours: number;
  minutes: number;
  seconds: number;
  intervalId: ReturnType<typeof setInterval> | null;
  incrementSeconds: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
  setIntervalId: (value: ReturnType<typeof setInterval> | null) => void;
}

export const useTimeStore = create<ITimeState>((set) => ({
  hours: 0,
  minutes: 0,
  seconds: 0,
  intervalId: null,
  incrementSeconds: () =>
    set((state) => {
      const nextSeconds = state.seconds + 1;

      if (nextSeconds === 60) {
        const nextMinutes = state.minutes + 1;

        if (nextMinutes === 60) {
          return {
            hours: state.hours + 1,
            minutes: 0,
            seconds: 0,
          };
        }

        return {
          minutes: nextMinutes,
          seconds: 0,
        };
      }

      return { seconds: nextSeconds };
    }),

  pauseTimer: () =>
    set((state) => {
      if (state.intervalId) clearInterval(state.intervalId);
      return { intervalId: null };
    }),

  stopTimer: () =>
    set((state) => {
      if (state.intervalId) clearInterval(state.intervalId);

      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        intervalId: null,
      };
    }),

  setIntervalId: (value) =>
    set({
      intervalId: value,
    }),
}));
