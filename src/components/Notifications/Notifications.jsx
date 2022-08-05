import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './notifications.css'
const Notifications = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full lg:w-2/3 mx-auto h-80'>
        <div className='w-full flex justify-between items-center p-2 pt-4'>
          <h1 className='text-black text-2xl sm:text-3xl font-bold'>Notifications</h1>
          <Link to='/settings' className='w-fit mr-4 border-0 text-gray-700 font-normal cursor-pointer rounded-lg hover:bg-gray-200 hover:text-black'>Settings</Link>
        </div>
        <div className='w-full flex flex-col sm:flex-row'>
          <div className='w-full sm:w-1/3'>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu py-2 px-4 sm:px-0 overflow-y-auto w-full bg-base-100 text-base-content flex flex-row justify-around sm:flex-col ">
                <li><NavLink className='p-2 rounded-md text-gray-700' to='/notifications/all'>All</NavLink></li>
                <li><NavLink className='p-2 rounded-md text-gray-700' to='/notifications/comments'>Comments</NavLink></li>
                <li><NavLink className='p-2 rounded-md text-gray-700' to='/notifications/posts'>Posts</NavLink></li>
              </ul>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Notifications;