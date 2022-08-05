import React from 'react';
import { Link } from 'react-router-dom';

const Podcast = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full lg:w-2/3 mx-auto h-80'>
        <div className='w-full flex justify-between items-center p-2 pt-4'>
          <h1 className='text-black text-2xl sm:text-3xl font-bold'>Podcasts</h1>
          <Link to='/settings' className='w-fit mr-4 border-0 text-gray-700 font-normal cursor-pointer rounded-lg hover:bg-gray-200 hover:text-black'>Settings</Link>
        </div>
        <section className='w-full flex flex-col sm:flex-row'>
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
    </div>
  );
};

export default Podcast;