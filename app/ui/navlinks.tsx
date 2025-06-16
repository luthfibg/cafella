'use client';
import {
  HomeIcon,
  WalletIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Main', href: '/dashboard', icon: HomeIcon },
  { name: 'Ingredient', href: '/dashboard/ingredient', icon: WalletIcon },
  { name: 'Service', href: '/dashboard/service', icon: ChatBubbleOvalLeftEllipsisIcon },
];

type Props = {
  collapsed?: boolean;
};

export default function NavLinks({ collapsed = false }: Props) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-400 dark:hover:bg-dark-choco-700 hover:text-coffee-300',
              {
                'justify-center': collapsed,
                'bg-blue-600 dark:bg-dark-choco-600 text-gray-800 dark:text-white': isActive,
              }
            )}
          >
            <LinkIcon className="w-4 h-4" />
            {!collapsed && <span className={clsx('truncate text-xs', { 'sr-only': collapsed })}>{link.name}</span>}
          </Link>
        );
      })}
    </>
  );
}
