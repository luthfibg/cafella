'use client';
import Drawer from "../ui/drawer";
import { useState } from "react";
import {
  BellIcon,
  // SunIcon,
  MoonIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen font-[family-name:var(--font-quicksand)]">
      {/* Navbar */}
      <header className="h-14 bg-white dark:bg-dark-choco-900 text-gray-800 dark:text-white flex items-center px-4 shadow-md">
        {/* Kiri: Tombol Toggle */}
        <div className="flex items-center">
          <span className="font-semibold text-lg mr-4">Cafe Admin</span>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-sm px-3 py-1 rounded bg-coffee-600 hover:bg-coffee-700"
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>

        {/* Tengah: Search Bar */}
        <div className="flex-1 flex justify-center px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-4 py-2 rounded-md border border-coffee-300 dark:border-dark-choco-700 bg-white dark:bg-dark-choco-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coffee-500"
          />
        </div>

        {/* Kanan: Icon Buttons */}
        <div className="flex items-center gap-3">
          <button className="p-2 border-1 border-coffee-800 hover:bg-coffee-200 dark:hover:bg-dark-choco-700 rounded-full">
            <BellIcon className="h-4 w-4" />
          </button>
          <button className="p-2 border-1 border-coffee-800 hover:bg-coffee-200 dark:hover:bg-dark-choco-700 rounded-full">
            {/* <SunIcon className="h-4 w-4" /> */}
            <MoonIcon className="h-4 w-4" />
          </button>
          <button className="p-2 border-1 border-coffee-800 hover:bg-coffee-200 dark:hover:bg-dark-choco-700 rounded-full">
            <UserCircleIcon className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 flex-shrink-0`}>
          <Drawer collapsed={collapsed} />
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-neutral-950 text-white p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
