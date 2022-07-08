import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { RiNotification3Line } from 'react-icons/ri';

const Header = () => {
    return (
        <div className="bg-white px-32 py-2 border-b border-gray-200 flex justify-between items-center shadow-sm">
            <Link to="/" className="mx-2">
                <img src={logo} alt="logo" height="60" width="50"/>
            </Link>
            <div className="border border-gray-300 rounded-md ml-2 mr-auto overflow-hidden flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-indigo-600">
                <input type="text" className="p-2 focus:outline-none w-80" placeholder="Search..." />
                <button className="h-10 w-10 flex justify-center items-center rounded-md hover:bg-purple-100">
                    <CgSearch size={26}/>
                </button>
            </div>
            <button className="font-semibold text-indigo-600 px-4 py-2 mx-2 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white">
                Create Post
            </button>
            <button className="relative flex justify-center items-center mx-2 h-10 w-10 hover:bg-purple-100 rounded-md">
                <RiNotification3Line size={24} />
            </button>
            <div className="h-9 w-9 mx-2 rounded-full bg-slate-200 hover:outline hover:outline-4 hover:outline-indigo-200 overflow-hidden">
                <img className="object-cover" src={`https://m.behindwoods.com/tamil-movies/cinema-articles-photos/the-many-lives-of-fahadh-faasil-photos-pictures-stills.jpg`} alt="profile" />
            </div>
        </div>
    );
};

export default Header;