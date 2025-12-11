"use client";

import { useTaskStore } from "../store/TaskStore";

export default function Summary() {
  const tasks = useTaskStore((state) => state.tasks);

  const completed = tasks.filter((t) => t.status === "completed");
  const pending = tasks.filter((t) => t.status === "pending");

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
        <h2 className="text-3xl font-bold text-center mb-6">Task Summary</h2>

        <div className="grid grid-cols-3 gap-4 text-center mb-8">
          <div className="bg-blue-100 text-blue-800 rounded-xl p-4 font-bold shadow-sm">
            Total<br />{tasks.length}
          </div>

          <div className="bg-green-100 text-green-800 rounded-xl p-4 font-bold shadow-sm">
            Completed<br />{completed.length}
          </div>

          <div className="bg-yellow-100 text-yellow-800 rounded-xl p-4 font-bold shadow-sm">
            Pending<br />{pending.length}
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Completed Tasks</h3>

        {completed.length === 0 && (
          <p className="text-gray-500">No completed tasks yet.</p>
        )}

        <div className="flex flex-col gap-3">
          {completed.map((t) => (
            <div
              key={t.id}
              className="bg-green-50 border border-green-300 rounded-lg p-3 font-medium shadow-sm"
            >
              {t.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
