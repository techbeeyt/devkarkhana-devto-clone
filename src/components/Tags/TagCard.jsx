import React from 'react';

const TagCard = ({ tag }) => {
  const { name, title, pub, col } = tag;
  return (
    <div className="w-full rounded-md bg-white">
      <div className={`border-t-[16px] border-black rounded-md p-6 flex flex-col justify-start items-start`}>
        <h2 className={`card-title font-bold mb-2`}><strong className={`text-[${col}]`}>#</strong>{name}</h2>
        <p className='text-gray-600 h-fit mb-2'>{title}</p>
        <p className='text-gray-600 text-sm mb-2'>{pub} posts published</p>
        <button className="w-fit px-3 py-2 rounded-md bg-gray-300 text-gray-700 text-sm">Buy Now</button>
      </div>
    </div>
  );
};

export default TagCard;