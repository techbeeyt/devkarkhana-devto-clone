import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './notifications.css'
const Notifications = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='w-2/3 mx-auto h-80 flex'>
        <div className='w-1/3 h-60 p-6'>
          <h1 className='text-black text-3xl font-bold mb-8'>Notifications</h1>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu py-2 overflow-y-auto w-56 bg-base-100 text-base-content">
              <li><NavLink className='p-2 rounded-md text-gray-700' to='/notifications/all'>All</NavLink></li>
              <li><NavLink className='p-2 rounded-md text-gray-700' to='/notifications/comments'>Comments</NavLink></li>
              <li><NavLink className='p-2 rounded-md text-gray-700' to='/notifications/posts'>Posts</NavLink></li>
            </ul>
          </div>
        </div>
        <div className='w-full h-60 flex flex-col items-end'>
          <Link to='/settings' className='w-fit my-6 py-2 px-4 border-0 text-gray-700 font-normal cursor-move'>Settings</Link>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Notifications;