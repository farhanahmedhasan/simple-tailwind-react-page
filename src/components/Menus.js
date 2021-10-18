import React from 'react';
import { Items } from '../assests/data/menuItems';

const Menus = () => {
  if (Items.length < 1) {
    return <h4 className='text-xl container text-center py-4'>No Menu Items Found</h4>;
  }

  return (
    <>
      <div className='cards'>
        {Items.map((item) => {
          const { id, name, title, price, imgSrc } = item;
          return (
            <div key={id} className='card'>
              <img src={imgSrc} className='card__img' alt='egg' />
              <h2 className='card__title'>{name}</h2>
              <p className='card__subtitle'>{title}</p>
              <span>${price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menus;
