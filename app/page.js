"use client";

import Link from "next/link";
import { Flag, CheckCircle } from "lucide-react";

export default function Home() {
  return (	<div
  className="min-h-screen w-full flex flex-col"
  style={{
    backgroundImage: "url('https://wallpapercave.com/wp/OY52vgj.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-serif text-white mb-6">Task Manager</h1>

        <div className="flex flex-col gap-4">
          <Link
            href="/addtask"
            className="bg-green-600 text-white text-center px-6 py-2 rounded-lg font-bold"
          >
            Add Task
          </Link>

          <Link
            href="/list"
            className="bg-blue-600 text-white text-center px-6 py-2 rounded-lg font-bold"
          >
            Task List
          </Link>

          <Link
            href="/summary"
            className="bg-purple-600 text-white text-center px-6 py-2 rounded-lg font-bold"
          >
            Summary
          </Link>
          <Link
            href="/tasks"
            className="bg-amber-600 text-white text-center px-6 py-2 rounded-lg font-bold"
          >
            Tasks
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex flex-row bg-black text-white items-center justify-center p-2">
      <div className="mr-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eSb4lGANjKmXnj-qOz6dX-tvglN7u-0STA&s"
          width={80}
        />
      </div>

      <NavCol2Item title={"Home"} subtitle={"Dashboard"} />
      <SearchBar />

      <NavRow2Item icon={<Flag />} subtitle={"EN"} />
      <NavCol2Item title={"Hello User"} subtitle={"Tasks"} />
      <NavCol2Item title={"Summary"} subtitle={"Overview"} />
      <NavRow2Item icon={<CheckCircle />} subtitle={"Done"} />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex flex-row bg-white text-black items-center mx-4 rounded">
      <div className="bg-gray-200 p-2 text-sm">All</div>
      <input
        className="w-[400px] py-2 px-2 outline-none"
        placeholder="Search Tasks..."
      />
      <div className="bg-orange-400 p-2 text-sm">Search</div>
    </div>
  );
}

function NavCol2Item({ title, subtitle }) {
  return (
    <div className="flex flex-col mx-3">
      <div className="text-gray-400 text-[12px] font-bold">{title}</div>
      <div className="font-bold text-[14px]">{subtitle}</div>
    </div>
  );
}

function NavRow2Item({ icon, subtitle }) {
  return (
    <div className="flex flex-row items-center mx-3">
      <div className="text-gray-400 text-[20px] m-2">{icon}</div>
      <div className="font-bold text-[16px]">{subtitle}</div>
    </div>
  );
}
