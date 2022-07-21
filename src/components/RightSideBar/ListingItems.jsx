import React from 'react';

const ListingItems = ({ item }) => {
  const { title, category } = item;
  return <div className='group flex flex-col p-4 hover:bg-white '>
    <h1 className='text-gray-800 group-hover:text-blue-800 mb-1'>{title}</h1>
    {
      category === "New" ? <span className="w-fit px-[3px] py-[2px] rounded-md text-[#6b2c03] text-sm bg-yellow-300">{category}</span>
        : <p className="text-gray-600 text-sm ">{category}</p>
    }
  </div>
};

export default ListingItems;