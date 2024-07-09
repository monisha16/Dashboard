'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BellIcon } from 'lucide-react';
import { useState } from 'react';
import { CommandDemo } from './Command';
import { Button } from './ui/button';

export default function Header() {
  const [notifications, setNotifications] = useState([
    {
      text: 'Already read notification',
      date: '02-01-2015',
      read: true,
    },
    {
      text: 'New unread notification',
      date: '02-01-2015',
      read: false,
    },
  ]);

  return (
    <div className='w-full grid grid-cols-2 gap-4 p-4 border-b'>
      <CommandDemo />
      <div className='flex items-center justify-end'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='relative' variant='outline' size='icon'>
              <div
                className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${
                  notifications.find((x) => x.read === true)
                    ? 'bg-green-500'
                    : 'bg-neutral-200'
                }`}
              ></div>
              <BellIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align='end'>
            {notifications.map((item, key) => (
              <DropdownMenuItem
                key={key}
                className='py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2'
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? 'bg-green-500' : 'bg-neutral-200'
                  }`}
                ></div>
                <div>
                  <p>{item.text}</p>
                  <p className='text-xs text-neutral-500'>{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
