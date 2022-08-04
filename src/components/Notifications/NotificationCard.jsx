import React from 'react';
import { Link } from 'react-router-dom';
import './notifications.css'
const NotificationCard = ({ notification }) => {
  const { img, text } = notification;
  return (
    <div className='w-full bg-white border-[1px] flex flex-col justify-center items-center p-10 mb-2 rounded-md'>
      <div class="avatar">
        <div class="rounded-full w-32 border-2">
          <img src={img} class="" alt="link to sloan's profile" width="128" height="128" />
        </div>
      </div>
      <div className='w-full text-center text-gray-700 text-lg my-6 px-2'>
        {
          text.map(t => {
            return t.link?<Link to={'/'} className='text-blue-800 inline'>{ t.msg} </Link>:<p>{t.msg} </p>
          })
        }        
      </div>
      <div>
        <p className='text-gray-700'>Visit <Link to='/settings' className='text-blue-800'>Settings</Link> to manage your notifications.</p>
      </div>
    </div>
  );
};

export default NotificationCard;