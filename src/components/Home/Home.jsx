import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMobileMenu } from '../../store/AppState';

import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';
import BlogFeed from '../BlogFeed/BlogFeed';

const Home = () => {
    const showMobileMenu = useSelector(state => state.AppState.showMobileMenu);
    
    return (
        <div className="mt-2 grid grid-cols-4">
            <div  className="ml-auto mr-4 hidden md:block lg:block">
                <LeftSideBar/>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-span-2 mx-4">
                <BlogFeed />
            </div>
            <div className="hidden lg:block">
                <RightSideBar />
            </div>
        </div>
    );
};

export default Home;