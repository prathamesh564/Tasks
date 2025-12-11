"use client";

import { useTaskStore } from "../store/TaskStore";

export default function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const toggleStatus = useTaskStore((state) => state.toggleStatus);

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
      <div className="bg-white shadow-xl p-8 rounded-2xl w-[600px]">
        <h2 className="text-3xl font-bold text-center mb-6">Task List</h2>

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 text-lg">No tasks added yet.</p>
        )}

        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-50 border border-gray-300 rounded-xl p-4 flex flex-col gap-3 shadow-sm"
            >
              <h4
                className={`text-xl font-semibold ${
                  task.status === "completed"
                    ? "line-through text-gray-400"
                    : "text-black"
                }`}
              >
                {task.title}
              </h4>

              <div className="flex gap-3">
                <button
                  onClick={() => toggleStatus(task.id)}
                  className={`px-4 py-2 rounded-lg font-bold text-white transition-all 
                    ${
                      task.status === "pending"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-yellow-500 hover:bg-yellow-600"
                    }
                  `}
                >
                  {task.status === "pending" ? "Mark Complete" : "Undo"}
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-4 py-2 rounded-lg font-bold bg-red-600 text-white hover:bg-red-700 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
