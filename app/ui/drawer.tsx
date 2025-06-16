'use client';
import Link from 'next/link';
import NavLinks from '@/app/ui/navlinks';
import { PowerIcon, UserIcon, TicketIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const profilePeekIcons = [
  {name: 'user', data: 'leonardo', icon: UserIcon},
  {name: 'position', data: 'admin', icon: TicketIcon},
  {name: 'logged_in', data: '08:13', icon: ClockIcon},
  {name: 'logged_out', data: '- - : - -', icon: ClockIcon},
]

export default function Drawer({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className={`h-full flex flex-col z-50 bg-dark-choco-900 text-white transition-all duration-300 px-2 py-4`}>
      {/* Profile Peek */}
      <Link
        className={`flex items-center justify-start mb-2 ${collapsed ? 'justify-center' : ''}`}
        href="/"
      >
        <div className={`bg-inherit border-1 space-y-2 px-2 py-4 border-coffee-700 rounded-md w-full ${collapsed ? 'w-10' : 'w-32'}`}>
          {
            profilePeekIcons.map((icon) => (
              <div key={icon.name} className={clsx('flex items-center gap-2', { 'justify-center': collapsed })}>
                <icon.icon className="w-4 h-4 text-dark-choco-300" />
                {!collapsed && <span className="text-xs font-extralight text-blue-600 dark:text-dark-choco-300">{icon.data}</span>}
              </div>
            ))
          }
        </div>
      </Link>

      {/* Nav Links */}
      <div className="flex flex-col flex-1 space-y-1">
        <NavLinks collapsed={collapsed} />
      </div>

      {/* Sign Out */}
      <form>
        <button className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-dark-choco-700 rounded-md">
          <PowerIcon className="w-4 h-4" />
          {!collapsed && <span className='text-xs text-red-400'>Sign Out</span>}
        </button>
      </form>
    </div>
  );
}
