'use client';

import React from 'react';

const UserItem = (props) => {
  return (
    <div className='flex justify-between items-center gap-2'>
      <div className='rounded-full min-h-10 min-w-10 bg-emerald-500 text-sm text-white flex items-center justify-center'>
        MT
      </div>
      <div className='grow'>
        <p className=''>Monisha Tarkar</p>
        <p className='text-sm text-neutral-500'>monishatarkar1625@gmail.com</p>
      </div>
    </div>
  );
};

export default UserItem;
