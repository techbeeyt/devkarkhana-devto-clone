import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMobileMenu } from '../../store/AppState';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { RiNotification3Line } from 'react-icons/ri';
import {AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import HoverDiv from './../HoverDiv/HoverDiv';

const Header = () => {
    const navigate = useNavigate();
    const showMobileMenu = useSelector(state => state.AppState.showMobileMenu);
    const dispatch = useDispatch();

    const [showProfile, setShowProfile] = useState(false);
    const [popmenu, setPopmenu] = useState("pointer-events-none");
    const [showProfileClass, setShowProfileClass] = useState("translate-y-2 opacity-0 pointer-events-none scale-90 hidden");
    const [isPClicked, setIsPClicked] = useState("");
    const [searchText, setSearchText] = useState("");


    const profileClicked = () => {
        if(showProfile){
            //Hiding the div
            setShowProfileClass("-translate-y-10 translate-x-4 opacity-0 pointer-events-none scale-90 hidden");
            setIsPClicked("");
            setPopmenu("pointer-events-none");
        } else {
            //Showing the div
            setShowProfileClass("translate-y-0 translate-x-0 opacity-1 scale-100 block");
            setIsPClicked("outline outline-4 outline-gray-300");
            setPopmenu("pointer-events-auto h-screen");
        }
        setShowProfile(!showProfile);
    }

    const sideMenuHandle = () => {
        dispatch(setShowMobileMenu(showMobileMenu));
    }
    return (
        <div className="bg-white px-1 border-b py-2 border-gray-300 sticky top-0 z-20 shadow-sm flex items-center justify-center w-full">
            <div className={`transition-all duration-700 ease-in-out absolute h-1.5 bg-indigo-700 top-0 left-0`}></div>
            <div className="px-3 w-full lg:w-5/6 flex justify-between items-center">
            <button className="md:hidden lg:hidden" onClick={sideMenuHandle}>
                <AiOutlineMenu size={24} />
            </button>
            <Link to="/" className="mr-auto ml-4 lg:mx-2">
                <img src={logo} alt="logo" width="50"/>
            </Link>
            {/* ! Lg Search bar */}
            <div className="hidden border border-gray-300 rounded-md ml-2 mr-auto overflow-hidden lg:flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-indigo-600">
                <input type="text" className="px-2 focus:outline-none w-96" placeholder="Search..." value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                <button className="h-9 w-9 flex justify-center items-center rounded-md hover:bg-purple-100" onClick={() => {
                    if(searchText.length > 0) navigate(`/search?q=${searchText}`)
                }}>
                    <CgSearch size={24}/>
                </button>
            </div>
            <button onClick={() => navigate(`/search`)}className="relative flex lg:hidden justify-center items-center mr-2 h-10 w-10 hover:bg-purple-100 hover:text-indigo-600 rounded-md">
                <CgSearch size={26}/>
            </button>
            <button className="hidden lg:block font-semibold text-indigo-600 px-4 py-2 mx-2 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white hover:underline">
                Create Post
            </button>
            <button className="relative flex justify-center items-center mr-2 h-10 w-10 hover:bg-purple-100 hover:text-indigo-600 rounded-md">
                <RiNotification3Line size={26} />
            </button>
            <div className="relative cursor-pointer">
                <div className={`${isPClicked} h-8 w-8 mx-2 rounded-full bg-slate-200 hover:outline hover:outline-4 hover:outline-indigo-200 overflow-hidden`}  
                onClick={(e) => {
                        profileClicked();
                        e.stopPropagation();
                    }
                }>
                    <img className="object-cover" src={`https://m.behindwoods.com/tamil-movies/cinema-articles-photos/the-many-lives-of-fahadh-faasil-photos-pictures-stills.jpg`} alt="profile" />
                </div>
                </div>
                
            </div>
            {
                showMobileMenu ? (
                    <div 
                    id="m_side_bar"
                    className={`fixed z-10 bg-black bg-opacity-25 top-0 left-0 md:hidden lg:hidden w-full`}
                    onClick={(e) => {
                        if(e.target.id === "m_side_bar"){
                            dispatch(setShowMobileMenu(showMobileMenu));
                        }
                    }}
                    >
                        <div className="w-72 h-screen overflow-y-scroll">
                            <LeftSideBar />
                        </div>
                    </div>
                ) : null
            }
            <div id="pop_menu" className={`${popmenu} absolute top-14 right-0 bottom-0 left-0 flex justify-center lg:block`}
                onClick={(e) => {
                    console.log(e.target.id)
                    if(e.target.id === 'pop_menu'){
                        profileClicked();
                    }
                }}>
                <div className={`${showProfileClass} transition-all delay-300 duration-100 ease-in absolute bg-white vw-100-1rem md:w-64 lg:w-64 shadow-lg rounded-md top-2 lg:top-0 md:right-6 lg:right-28 border border-gray-300 p-2 pointer-events-auto`}>
                    <HoverDiv>
                        <h1 className="font-semibold text-gray-600 group-hover:text-indigo-800 group-hover:underline text-lg">Fahadh Fassil</h1>
                        <span className="text-gray-400 group-hover:text-indigo-800 group-hover:underline text-sm">@fahadhfassil</span>
                    </HoverDiv>
                    <div className="h-0 w-full border-b border-gray-300 my-2"></div>
                    <HoverDiv>
                        Dashboard
                    </HoverDiv>
                    <HoverDiv>
                        Create Post
                    </HoverDiv>
                    <HoverDiv>
                        Reading List
                    </HoverDiv>
                    <HoverDiv>
                        Settings
                    </HoverDiv>
                    <div className="h-0 w-full border-b border-gray-300 my-2"></div>
                    <HoverDiv>
                        Sign Out
                    </HoverDiv>
                </div>
            </div>
        </div>
    );
};

export default Header;
