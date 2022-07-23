import React from 'react';
import { CgSearch } from 'react-icons/cg';

const MobileSearchBar = () => {
    return (
        <div className="w-full mt-3 bg-white border border-gray-300 rounded-md overflow-hidden flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-indigo-600">
            <input type="text" className="px-2 focus:outline-none w-full" placeholder="Search..." value={'sdcvzdsdfsdafsdfsdfsdafsdafsdfsdfasd'} onChange={(e) => {}}/>
            <button className="h-9 w-9 flex justify-center items-center rounded-md hover:bg-purple-100" onClick={() => {

            }}>
                <CgSearch size={24}/>
            </button>
        </div>
    );
};

export default MobileSearchBar;