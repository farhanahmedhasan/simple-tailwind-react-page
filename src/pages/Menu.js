import React from 'react';

const Menu = () => {
  return (
    <>
      <button className=' relative inline-block hover:bg-yellow-600 p-8 m-8 bg-yellow-300 text-6xl font-black'>
        Menu
        <span className='animate-ping absolute -right-1 -top-1 rounded-full h-3 w-3 bg-purple-400 opacity-75'></span>
        <span className='absolute -right-1 -top-1 rounded-full h-3 w-3 bg-purple-500'></span>
      </button>

      <div className='border mb-4 border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
        <div className='animate-pulse flex space-x-4'>
          <div className='rounded-full bg-blue-400 h-12 w-12'></div>
          <div className='flex-1 space-y-4 py-1'>
            <div className='h-4 bg-blue-400 rounded w-3/4'></div>
            <div className='space-y-2'>
              <div className='h-4 bg-blue-400 rounded'></div>
              <div className='h-4 bg-blue-400 rounded w-5/6'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
