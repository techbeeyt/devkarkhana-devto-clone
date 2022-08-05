import React from 'react';

const BrowseCard = ({ browse }) => {
  const { img, content } = browse;
  return (
    <div class="card w-full flex flex-row justify-start items-center">
      <img src={img} alt='browse' className='h-12 w-12 sm:h-14 sm:w-14 rounded-xl mr-2'/>
      <h2 className='text-base sm:text-lg  text-gray-700'>{ content}</h2>
    </div>
  );
};

export default BrowseCard;