import React from 'react';
import { Link } from 'react-router-dom';
import { tags } from '../../assets/database/tags.js';

import TagCard from './TagCard';
const Tags = () => {
  return (
    <div className='min-h-screen w-full'>
      <div className='w-full lg:w-5/6 mx-auto'>
        <div className='w-full flex justify-between items-center pt-4 mb-6'>
          <h1 className='text-black text-2xl sm:text-3xl font-bold'>Top Tags</h1>
          <div className='flex flex-row justify-center items-center'>
            <div class="relative ">
              <input type="text" id="simple-search" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <Link to='/settings' className='w-fit mx-4 border-0 text-gray-700 font-normal cursor-pointer rounded-lg hover:bg-gray-200 hover:text-black'>Following Tags</Link>
          </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
          {
            tags.map(tag => {
              return <TagCard key={tag.id} tag={tag} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Tags;