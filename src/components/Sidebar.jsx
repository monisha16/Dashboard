'use client';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  UserRound,
  Inbox,
  Logs,
  GlobeLock,
  Settings,
  BellRing,
  ReceiptIndianRupee,
} from 'lucide-react';

import UserItem from './UserItem';

const Sidebar = ({}) => {
  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          text: 'Profile',
          icon: <UserRound />,
        },
        {
          link: '/',
          text: 'Inbox',
          icon: <Inbox />,
        },
        {
          link: '/',
          text: 'Billing',
          icon: <ReceiptIndianRupee />,
        },
        {
          link: '/',
          text: 'Notifications',
          icon: <BellRing />,
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/',
          text: 'General Settings',
          icon: <Settings />,
        },
        {
          link: '/',
          text: 'Privacy',
          icon: <GlobeLock />,
        },
        {
          link: '/',
          text: 'Logs',
          icon: <Logs />,
        },
      ],
    },
  ];

  return (
    <div className='fixed flex flex-col gap-4 min-w-[300px] w-[300px] border-r min-h-screen p-4'>
      <div>
        <UserItem />
      </div>
      <div className='grow'>
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu, key) => {
              const { items, group } = menu;
              const isLastElement = key === menuList.length - 1;
              return (
                <div key={key}>
                  <CommandGroup heading={group}>
                    {items.map((item, key) => {
                      const { text, link, icon } = item;
                      return (
                        <CommandItem
                          key={key}
                          className='gap-2 flex cursor-pointer'
                        >
                          {icon}
                          {text}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                  {!isLastElement && <CommandSeparator />}
                </div>
              );
            })}
          </CommandList>
        </Command>
      </div>
      <div>Settings/Notification</div>
    </div>
  );
};

export default Sidebar;
