import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { RiNotification3Line } from 'react-icons/ri';
import { useState } from 'react';

const Header = () => {
    let tgl = false;
    const [showProfile, setShowProfile] = useState(false);
    const [showProfileClass, setShowProfileClass] = useState("translate-y-2 opacity-0 pointer-events-none scale-90");
    const [isPClicked, setIsPClicked] = useState("");
    const profileClicked = () => {
        if(showProfile){
            //Hiding the div
            setShowProfileClass("-translate-y-10 translate-x-4 opacity-0 pointer-events-none scale-90");
            setIsPClicked("");
        } else {
            //Showing the div
            setShowProfileClass("translate-y-0 translate-x-0 opacity-1 scale-100");
            setIsPClicked("outline outline-4 outline-gray-300");
        }
        setShowProfile(!showProfile);
        tgl = !tgl;

    }

    document.addEventListener("click",(e) => {
        const elem = e.target;
        if(elem.getAttribute("id") === "pop_menu"){
            console.log("this is pop menu");
        }else {
            console.log("This is not a pop menu");
            setShowProfileClass("-translate-y-10 translate-x-4 opacity-0 pointer-events-none scale-90");
            setIsPClicked("");
        }
        e.stopImmediatePropagation();
    });
    return (
        <div className="bg-white px-32 py-2 border-b border-gray-200 flex justify-between items-center shadow-sm sticky top-0 z-20">
            <Link to="/" className="mx-2">
                <img src={logo} alt="logo" width="50"/>
            </Link>
            <div className="border border-gray-300 rounded-md ml-2 mr-auto overflow-hidden flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-indigo-600">
                <input type="text" className="px-2 focus:outline-none w-96" placeholder="Search..." />
                <button className="h-9 w-9 flex justify-center items-center rounded-md hover:bg-purple-100">
                    <CgSearch size={26}/>
                </button>
            </div>
            <button className="font-semibold text-indigo-600 px-4 py-2 mx-2 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white">
                Create Post
            </button>
            <button className="relative flex justify-center items-center mx-2 h-10 w-10 hover:bg-purple-100 hover:text-indigo-600 rounded-md">
                <RiNotification3Line size={24} />
            </button>
            <div className="relative">
                <div className={`${isPClicked} h-8 w-8 mx-2 rounded-full bg-slate-200 hover:outline hover:outline-4 hover:outline-indigo-200 overflow-hidden`}  
                onClick={(e) => {
                        profileClicked();
                        e.stopPropagation();
                    }
                }>
                    <img className="object-cover" src={`https://m.behindwoods.com/tamil-movies/cinema-articles-photos/the-many-lives-of-fahadh-faasil-photos-pictures-stills.jpg`} alt="profile" />
                </div>
                <div id="pop_menu" className={`${showProfileClass} transition-all duration-100 ease-in absolute bg-white w-64 h-80 shadow-lg rounded-md right-0 top-10 border border-gray-200`}>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
