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

  mode: TaskMode;
  setMode: () => void;

  totalTasks: number;
  completedTasks: number;
}

export const useTaskStore = create<ITaskState>((set) => ({
  status: "Away",
  setStatus: () => {
    const { intervalId } = useTimeStore.getState();
    const { mode } = useTaskStore.getState();

    let status: StatusMode = "Away";

    if (!intervalId && mode !== "Start Timer") {
      status = "On Hold";
    } else if (intervalId) {
      status = "Active";
    }

    set({ status });
  },

  mode: "Start Timer",
  setMode: () => {
    let taskMode: TaskMode;
    const { seconds, minutes, hours } = useTimeStore.getState();

    if (seconds === 0 && minutes === 0 && hours === 0) taskMode = "Start Timer";
    else if (seconds > 0 && seconds <= 10) taskMode = "Low Productive";
    else if (seconds > 10 && seconds <= 20) taskMode = "Productive";
    else taskMode = "Focused Productivity";

    set({ mode: taskMode });
  },

  totalTasks: 0,
  completedTasks: 0,
}));
