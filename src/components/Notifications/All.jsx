import React from 'react';
import { notifications } from '../../assets/database/notifications';
import NotificationCard from './NotificationCard';
const All = () => {
  return (
    <div className='w-full'>
      {notifications.map(notification => {
        return <NotificationCard key={notification.key} notification={notification} />
      })}
    </div>
  );
};

export default All;