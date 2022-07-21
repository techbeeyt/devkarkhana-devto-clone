import React from 'react';
import ListingItems from './ListingItems';

const HashCards = ({ hashList }) => {
  console.log(hashList);
  return (
    <div className='bg-[#fafafa] rounded-lg  mb-4 border-[1px] border-gray-200 cursor-pointer'>
      <h1 className='hover:cursor-text p-4 text-xl font-bold text-gray-700'>{ hashList.hash}</h1>
      {
        hashList.items.map(item => { return <ListingItems key={item.key} item={item} /> })
      }
    </div>
  );
};

export default HashCards;