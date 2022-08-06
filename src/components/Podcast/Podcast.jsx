import React from 'react';
import { Link } from 'react-router-dom';
import { podcast } from '../../assets/database/podcast';
import BrowseCard from './BrowseCard';
import EpisodesCard from './EpisodesCard';
import ShowCards from './ShowCards';
const Podcast = () => {
  const { episodes, shows , browses} = podcast;
  console.log(episodes);
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full lg:w-5/6 px-2 lg:px-4 mx-auto'>
        <div className='w-full flex justify-between items-center pt-4 mb-6'>
          <h1 className='text-black text-2xl sm:text-3xl font-bold'>Podcasts</h1>
          <Link to='/settings' className='w-fit mr-4 border-0 text-gray-700 font-normal cursor-pointer rounded-lg hover:bg-gray-200 hover:text-black'>Suggest a Podcast</Link>
        </div>
        <section className='w-full '>
          <div className='w-full mb-10'>
            <h1 className='text-black text-xl sm:text-2xl font-bold mt-2'>Latest episodes</h1>
            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-3 mt-5'>
              {
                episodes.map(episode => {
                  return <EpisodesCard key={episode.id} episode={episode} />
                })
              }
            </div>
          </div>
          <div className='w-full mb-10'>
            <h1 className='text-black text-xl sm:text-2xl font-bold mt-2'>Featured shows</h1>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-5'>
              {
                shows.map(show => {
                  return <ShowCards key={show.id} show={show} />
                })
              }
            </div>
          </div>
          <div className='w-full mb-10'>
            <h1 className='text-black text-xl sm:text-2xl font-bold mt-2'>Browse</h1>
            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5'>
              {
                browses.map(browse => {
                  return <BrowseCard key={browse.id} browse={browse} />
                })
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Podcast;