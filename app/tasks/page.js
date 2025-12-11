"use client";

import { Flag, CheckCircle } from "lucide-react";
import taskStore from "./task-store/task-store";
import { useRouter } from "next/navigation";

export default function TasksApp() {
  const router = useRouter();

  return (
    <div>
      <Navbar />

      <div onClick={() => router.push(`/tasks`)}
        className="w-[150px] h-[30px] mx-[10px] rounded-lg bg-green-600 font-bold text-1xl text-center">
        View Tasks
      </div>

      <div className="flex flex-row">
        <TaskList />
        <CompletedList />
      </div>
    </div>
  );
}

function TaskList() {
  const { tasks } = taskStore();

  return (
    <div className="flex flex-col">
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
}

function CompletedList() {
  const { completed } = taskStore();

  return (
    <div className="flex flex-col">
      {completed.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
}

function TaskCard({ task }) {
  const { completeTask } = taskStore();

  return (
    <div className="flex flex-row h-[200px] w-[800px] border border-gray-100">
      <div className="p-6 bg-gray-300">
        <img src="https://cdn-icons-png.flaticon.com/512/556/556712.png" width={120} />
      </div>
      <div className="flex flex-col m-3 justify-center">
        <TaskTitle title={task.title} />
        <div className="text-gray-700 text-lg">{task.desc}</div>

        <div className="text-lg font-bold text-green-500">
          Status: {task.status}
        </div>

        <div
          onClick={() => completeTask(task)}
          className="bg-yellow-300 p-2 text-center rounded-full font-bold text-lg mt-4"
        >
          Mark Complete
        </div>
      </div>
    </div>
  );
}

function TaskTitle({ title }) {
  return <div className="font-bold text-black text-xl">{title}</div>;
}

function Navbar() {
  return (
    <div className="flex flex-row bg-black text-white items-center justify-center">
      <div className="mr-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eSb4lGANjKmXnj-qOz6dX-tvglN7u-0STA&s"
          width={100}
        />
      </div>

      <NavCol2Item title={"Tasks"} subtitle={"Dashboard"} />
      <SearchBar />

      <NavRow2Item icon={<Flag />} subtitle={"EN"} />
      <NavCol2Item title={"Hello User"} subtitle={"Activity"} />
      <NavCol2Item title={"Completed"} subtitle={"Tasks"} />
      <NavRow2Item icon={<CheckCircle />} subtitle={"Done"} />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex flex-row bg-white text-black justify-center items-center">
      <div className="bg-gray-200 p-2">All</div>
      <div>
        <input className="w-[900px] py-2" placeholder="Search Tasks..." />
      </div>
      <div className="bg-orange-400 p-2">Search</div>
    </div>
  );
}

function NavCol2Item({ title, subtitle }) {
  return (
    <div className="flex flex-col mx-4">
      <div className="text-gray-400 text-[12px] font-bold">{title}</div>
      <div className="font-bold text-[14px]">{subtitle}</div>
    </div>
  );
}

function NavRow2Item({ icon, subtitle }) {
  return (
    <div className="flex flex-row items-center">
      <div className="text-gray-400 text-[20px] font-bold m-2">{icon}</div>
      <div className="font-bold text-[20px]">{subtitle}</div>
    </div>
  );
}
