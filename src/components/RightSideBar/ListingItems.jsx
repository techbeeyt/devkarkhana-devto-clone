import React from 'react';

const ListingItems = ({ item }) => {
  const { title, category } = item;
  return <div className='group flex flex-col p-4 hover:bg-white '>
    <h1 className='text-gray-800 group-hover:text-blue-800'>{title}</h1>
    <h2 className='text-gray-600 text-sm'>{category}</h2>
  </div>
};

export default ListingItems;