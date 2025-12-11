import { create } from "zustand";

const taskStore = create((set) => ({
  tasks: [
    {
      id: 1,
      title: "Complete Assignment",
      desc: "Finish Zustand task manager",
      status: "pending",
    },
    {
      id: 2,
      title: "Study React",
      desc: "Revise hooks and routing",
      status: "pending",
    },
  ],

  completed: [],

  completeTask: (task) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== task.id),
      completed: [...state.completed, { ...task, status: "completed" }],
    })),
}));

export default taskStore;
