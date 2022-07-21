import React from 'react';
import ListingItems from './ListingItems';
import { hashItems } from '../../assets/database/rightBar';
import HashCards from './HashCards';

const RightSideBar = () => {
    const listingItems = [
        {
            key: 123345,
            title: "Only one Entry in Planning Contest So Far",
            category: "events",
        },
        {
            key: 123121,
            title: "Freelance Full-Stack Web Developer",
            category: "forhire",
        },
        {
            key: 21231244,
            title: "Creating email templates is difficult and time-consuming. Let's solve it :) ",
            category: "products",
        },
        {
            key: 143123,
            title: "I'll be your JavaScript mentor",
            category: "collabs",
        },
        {
            key: 12324324,
            title: "📨 This Week In React: newsletter for professionals ⚛️",
            category: "collabs",
        },
    ]
    return (
        <div className="mt-2 min-h-full w-5/6 mb-5">
            <div className='bg-[#fafafa] rounded-lg p-4 mb-4  border-[1px] border-gray-200'>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--lh_J2TaC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://forem.dev/remoteimages/uploads/articles/f7nihr3z8nacgyb8ptrn.png" alt="forem for android" height="400" />
                <h3 className='text-[#3846e3] text-lg font-bold mt-2'>
                    <strong>
                        <a href="https://dev.to/devteam/forem-for-android-is-here-38ik">Forem for Android is here!</a>
                    </strong>
                </h3>
            </div>
            <div className='bg-[#fafafa] rounded-lg  mb-4  border-[1px] border-gray-200'>
                <div className='flex justify-between p-4'>
                    <h1 className='hover:cursor-text text-xl font-bold'>Listings</h1>
                    <button className='hover:cursor-pointer text-sm font-light text-blue-800'>See all</button>
                </div>
                <div>
                    {
                        listingItems.map(item => { return <ListingItems key={item.key} item={item} /> })
                    }
                    <button className='w-full py-4 text-center tracking-normal text-sm text-gray-600 font-semibold hover:text-blue-800 l'>Create a Listing</button>
                </div>
            </div>
            {
                hashItems.map(hashList => { return <HashCards key={hashList.title} hashList={hashList} /> })
            }
        </div>
    );
};

export default RightSideBar;