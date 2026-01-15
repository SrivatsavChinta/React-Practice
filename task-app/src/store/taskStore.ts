import { create } from "zustand";
import { useTimeStore } from "./timeStore";

export type TaskMode =
  | "Start Timer"
  | "Low Productive"
  | "Productive"
  | "Focused Productivity";

export type StatusMode = "Active" | "On Hold" | "Away";

export interface ITaskState {
  status: StatusMode;
  setStatus: () => void;
  //   totalTasks: number;
  //   completedTasks: number;
  mode: TaskMode;
  setMode: () => void;
}

export const useTaskStore = create<ITaskState>((set) => ({
  status: "Away",
  setStatus: () => {},

  mode: "Start Timer",
  setMode: () => {
    let nextMode: TaskMode;
    const { seconds, minutes, hours } = useTimeStore.getState();

    if (seconds === 0 && minutes === 0 && hours === 0) nextMode = "Start Timer";
    else if (seconds > 0 && seconds <= 10) nextMode = "Low Productive";
    else if (seconds > 10 && seconds <= 20) nextMode = "Productive";
    else nextMode = "Focused Productivity";

    set({ mode: nextMode });
  },
}));
