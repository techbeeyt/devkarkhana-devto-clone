import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { useEffect } from 'react';

const TagCard = ({ tag }) => {
  const { name, title, pub, col } = tag;
  useEffect(() => {
    document.getElementById(`tag-${name}`).style.borderTopColor = col;
    document.getElementById(`hash-${name}`).style.color = col;
  }, [col,name])
  return (
    <div className="w-full rounded-md bg-white">
      <div id={`tag-${name}`} className={`border-t-[16px]  rounded-md p-4 flex flex-col justify-start items-start`}>
        <a id={`title-${name}`} href='/'  className={`font-bold text-lg text-gray-800 rounded-md mb-2 px-2 py-1 border-[1px] border-white
         hover:border-red-300/20 hover:bg-red-200/20
        `}><strong id={`hash-${name}`} className={`text-[${col}]`}>#</strong>{name}</a>
        <p className='text-gray-600 h-fit mb-2 px-2'>{title}</p>
        <p className='text-gray-600 text-sm mb-2 px-2'>{pub} posts published</p>
        <button className="w-fit px-4 py-2 mb-2 rounded-md bg-gray-300 text-gray-700 text-sm hover:bg-gray-400 hover:text-black">Buy Now</button>
      </div>
    </div>
  );
};

export default TagCard;