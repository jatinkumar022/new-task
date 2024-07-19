import { create } from "zustand";

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted?: boolean;
  isImportant: boolean;
  date?: string;
}
interface TaskStore {
  tasks: Task[];
  addTask: (title: string, description: string, isImportant: boolean) => void;
  editTask: (
    id: number,
    title: string,
    description: string,
    isImportant: boolean
  ) => void;
  toggleTaskCompletion: (id: number) => void;
  taskImportance: (id: number) => void;
  deleteTask: (id: number) => void;
  getCompletedTasks: () => Task[];
  getImportantTasks: () => Task[];
  getRemainingTasks: () => Task[];
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  addTask: (title, description, isImportant) =>
    set((state) => {
      const newTask: Task = {
        id: Date.now(),
        title,
        description,
        isImportant,
        date: new Date().toISOString(),
      };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),
  editTask: (id, title, description, isImportant) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, title, description, isImportant } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),
  toggleTaskCompletion: (id: number) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),
  taskImportance: (id: number) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isImportant: !task.isImportant } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),
  deleteTask: (id: number) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),
  getCompletedTasks: () => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    return tasks.filter((task: Task) => task.isCompleted);
  },
  getImportantTasks: () => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    return tasks.filter((task: Task) => task.isImportant);
  },
  getRemainingTasks: () => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    return tasks.filter((task: Task) => !task.isCompleted);
  },
}));

export default useTaskStore;
