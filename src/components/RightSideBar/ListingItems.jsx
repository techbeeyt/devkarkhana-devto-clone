import React from 'react';

const ListingItems = ({ item }) => {
  const { title, category } = item;
  return <div className='p-4 hover:bg-white w-full cursor-pointer border-b border-gray-100 group'>
    <div className='hover:bg-white bg-hover:bg-white'>
      <span className='text-gray-800 group-hover:text-indigo-800 mb-1 text-start'>{title}</span>
      {
        category === "New" ? <span className="w-fit px-[3px] py-[2px] rounded-md text-[#6b2c03] text-sm bg-yellow-300">{category}</span>
          : <p className="w-fit text-gray-600 text-sm">{category}</p>
      }
    </div>
  </div>
};

export default ListingItems;