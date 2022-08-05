import React from 'react';

const EpisodesCard = ({ episode }) => {
  const { img, content, time } = episode;
  return (
    <div class="card w-full bg-white hover:shadow-lg border-[1px] rounded-md hover:cursor-pointer hover:text-blue-800">
      <figure><img src={img} alt={content} /></figure>
      <div class="card-body p-4">
        <h2 class="card-title text-base font-medium leading-5">{ content}</h2>
        <h5 className='text-gray-500 text-sm'>{ time}</h5>
      </div>
    </div>
  );
};

export default EpisodesCard;