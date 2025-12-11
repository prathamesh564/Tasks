"use client";

import { useState } from "react";
import { useTaskStore } from "../store/TaskStore";

export default function AddTaskPage() {
  const [title, setTitle] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    addTask(title);
    setTitle("");
  };

  return (
    	<div
  className="min-h-screen w-full flex flex-col items-center justify-center p-4"
  style={{
    backgroundImage: "url('https://tse4.mm.bing.net/th/id/OIP.ImYMaLmm4syaWYwMdAqO6wHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <div className="bg-white shadow-lg p-8 rounded-2xl w-[400px] text-center">
        <h2 className="text-2xl font-bold mb-6">Add New Task</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={title}
            placeholder="Enter a task"
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-all"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
