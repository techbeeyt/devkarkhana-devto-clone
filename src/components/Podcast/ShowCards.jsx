import React from 'react';

const ShowCards = ({ show }) => {
  const { img, content } = show;
  return (
    <div class="card w-full rounded-sm hover:cursor-pointer">
      <figure><img src={img} alt={content} /></figure>
      <h2 class="text-center text-lg sm:text-xl font-bold text-gray-900 leading-5 mt-3">{content}</h2>
    </div>
  );
};

export default ShowCards;