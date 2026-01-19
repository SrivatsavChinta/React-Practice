import { create } from "zustand";
import { useTimeStore } from "./timeStore";

export type TaskMode =
  | "Start Timer"
  | "Low Productive"
  | "Productive"
  | "Focused Productivity";

export type StatusMode = "Active" | "On Hold" | "Away";

export type TaskFilter = "all" | "todo" | "completed";

export interface ITask {
  completed: boolean;
  text: string;
}

export interface ITaskState {
  status: StatusMode;
  setStatus: () => void;

  mode: TaskMode;
  setMode: () => void;

  totalTasks: number;
  checkedTasks: number;

  taskList: ITask[];
  setTaskList: (task: string) => void;
  toggleTask: (index: number) => void;

  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
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
  checkedTasks: 0,

  taskList: [],
  setTaskList: (task: string) =>
    set((state) => ({
      taskList: [...state.taskList, { completed: false, text: task }],
      totalTasks: state.totalTasks + 1,
    })),
  toggleTask: (index) =>
    set((state) => {
      const updatedTasks = [...state.taskList];
      const isCompleted = updatedTasks[index].completed;
      updatedTasks[index].completed = !isCompleted;
      return {
        taskList: updatedTasks,
        checkedTasks: isCompleted
          ? state.checkedTasks - 1
          : state.checkedTasks + 1,
      };
    }),

  filter: "all",
  setFilter: (filter) => set({ filter }),
}));
