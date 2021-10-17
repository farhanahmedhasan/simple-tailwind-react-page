import React from 'react';
import { Items } from '../assests/data/menuItems';

const Menus = () => {
  if (Items.length < 1) {
    return <h4 className='text-xl container text-center py-4'>No Menu Items Found</h4>;
  }

  return (
    <>
      <div className='container gap-4 flex flex-col items-center md:items-start md:flex-row md:justify-center md:flex-wrap'>
        {Items.map((item) => {
          const { id, name, title, price, imgSrc } = item;
          return (
            <div key={id} className='max-w-xs mb-12 flex flex-col items-center justify-center md:justify-start'>
              <img src={imgSrc} className='w-full h-96 sm:h-120 rounded-sm shadow mb-6' alt='egg' />
              <h2 className='text-2xl mb-2'>{name}</h2>
              <p className='mb-2 text-center'>{title}</p>
              <span>${price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menus;
