import React from 'react';
import { Link } from 'react-router-dom';

const Podcast = () => {
  return (
    <div className='w-5/6 min-h-screen mx-auto p-8'>
      <div className='w-full flex justify-between'>
        <h1 className='text-black text-3xl font-bold mb-8'>Notifications</h1>
        <Link to='/' className='w-fit my-6 py-2 px-4 border-0 text-gray-700 font-normal cursor-pointer rounded-lg hover:bg-gray-200 hover:text-black'>Suggest a podcast</Link>
      </div>
      <section className='w-full'>
        <div className='w-full'>
          <h1 className='text-black text-xl font-bold'>Latest episodes</h1>
          <div>
          </div>
          {
            
          }
        </div>
        <div className='w-full'>
          <h1 className='text-black text-xl font-bold'>Featured shows</h1>
          <div>
            {

            }
          </div>
        </div>
        <div className='w-full'>
          <h1 className='text-black text-xl font-bold'>Browse</h1>
          <div>
            {
              
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;