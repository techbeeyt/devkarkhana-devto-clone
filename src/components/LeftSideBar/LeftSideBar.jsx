import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMobileMenu } from '../../store/AppState';

import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import HomeIcon from "../../assets/svg/leftsidebar/home.svg";
import ReadingList from "../../assets/svg/leftsidebar/reading_list.svg";
import Listings from '../../assets/svg/leftsidebar/listings.svg';
import Podcasts from '../../assets/svg/leftsidebar/podcasts.svg';
import Videos from '../../assets/svg/leftsidebar/videos.svg';
import Tags from '../../assets/svg/leftsidebar/tags.svg';
import icFAQ from '../../assets/svg/leftsidebar/FAQ.svg';
import ForemShop from '../../assets/svg/leftsidebar/ForemShop.svg';
import Sponsors from '../../assets/svg/leftsidebar/sponsors.svg';
import About from '../../assets/svg/leftsidebar/about.svg';
import Contact from '../../assets/svg/leftsidebar/contact.svg';
import Guides from '../../assets/svg/leftsidebar/guides.svg';
import SoftwareCompanies from '../../assets/svg/leftsidebar/SoftwareCompanies.svg';

import { FaTwitter } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { RiTwitchLine } from 'react-icons/ri';
import { RiSettingsLine } from 'react-icons/ri';
import ToolTip from '../ToolTip/ToolTip';
import HoverDiv from '../HoverDiv/HoverDiv';


const LeftSideBar = () => {
    const dispatch = useDispatch();
    let showMobileMenu = useSelector(state => state.AppState.showMobileMenu);
    return (
        <div className={`bg-white md:bg-transparent lg:bg-transparent px-2 shadow-md md:shadow-none lg:shadow-none min-h-full pb-4`}>
            <div className="flex justify-between items-center md:hidden lg:hidden">
                <h1 className="text-lg md:text-xl lg:text-xl font-bold py-4">DEV Community</h1>
                <MdClose className={`closeButton`} size={26} onClick={() => {dispatch(setShowMobileMenu(showMobileMenu))}}/>
            </div>
            <ul className="py-2">
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={HomeIcon} alt="home"/>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={ReadingList} alt="ReadingList"/>
                        <span>Reading List</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={Listings} alt="Listings"/>
                        <span>Listings</span>
                    </Link>
                </li>
                    <Link  to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={Podcasts} alt="Podcasts"/>
                        <span>Podcasts</span>
                    </Link>
                <li>
                    <Link  to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={Videos} alt="home"/>
                        <span>Videos</span>
                    </Link>
                </li>
                <li>
                    <Link  to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={Tags} alt="home"/>
                        <span>Tags</span>
                    </Link>
                </li>
                <li>
                    <Link  to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={icFAQ} alt="home"/>
                        <span>FAQ</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={ForemShop} alt="forem-shop"/>
                        <span>Forem Shop</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={Sponsors} alt="home"/>
                        <span>Sponsors</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={About} alt="about"  height={20} width={20}/>
                        <span>About</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={Contact} alt="contact"/>
                        <span>Contact</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={Guides} alt="guides"  height={20} width={20} />
                        <span>Guides</span>
                    </Link>
                </li>
                <li>
                    <Link  to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={SoftwareCompanies} alt="software-companies" height={20} width={20} />
                        <span>Software Companies</span>
                    </Link>
                </li>
            </ul>
            <h1 className="px-2 font-bold mt-4">Other</h1>
            <ul className="mb-4">
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={HomeIcon} alt="home"/>
                        <span>Code of Conduct</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={ReadingList} alt="ReadingList"/>
                        <span>Privacy Policy</span>
                    </Link>
                </li>
                <li>
                    <Link to='/' className="pl-2 hover:text-indigo-700 pr-6 hover:bg-purple-200 hover:underline rounded-md flex justify-start items-center py-2 gap-2">
                        <img src={Listings} alt="Listings"/>
                        <span>Terms of Use</span>
                    </Link>
                </li>
            </ul>

            <div className="px-2 my-6 flex justify-between items-center">
                <ToolTip title="Twitter">
                    <HoverDiv>
                        <a href="www.github.com" className="text-gray-700 group-hover:text-indigo-800">
                            <FaTwitter size={22} />
                        </a>
                    </HoverDiv>
                </ToolTip>
                <ToolTip title="Facebook">
                    <HoverDiv>
                        <a href="www.github.com" className="text-gray-700 group-hover:text-indigo-800">
                            <AiFillFacebook size={24} />
                        </a>
                    </HoverDiv>
                </ToolTip>
                <ToolTip title="Github">
                    <HoverDiv>
                        <a href="www.github.com" className="text-gray-700 group-hover:text-indigo-800">
                            <AiFillGithub size={24} />
                        </a>
                    </HoverDiv>
                </ToolTip>
                <ToolTip title="Instagram">
                    <HoverDiv>
                        <a href="www.github.com" className="text-gray-700 group-hover:text-indigo-800">
                            <AiFillInstagram size={24} />
                        </a>
                    </HoverDiv>
                </ToolTip>
                <ToolTip title="Twich">
                    <HoverDiv>
                        <a href="www.github.com" className="text-gray-700 group-hover:text-indigo-800">
                            <RiTwitchLine size={24} />
                        </a>
                    </HoverDiv>
                </ToolTip>
            </div>

            <div className="px-2">
                <div className="mt-8 flex justify-between items-center">
                    <h1 className="font-bold">My Tags</h1>
                    <Link to="/">
                        <RiSettingsLine size={24} />
                    </Link>
                </div>
            </div>

            <div className="px-2 mt-6 mb-4 h-52 overflow-y-scroll">
                <ul>
                    <li>
                        <HoverDiv>
                            #js
                        </HoverDiv>
                    </li>
                    <li>
                        <HoverDiv>
                            #react
                        </HoverDiv>
                    </li>
                    <li>
                        <HoverDiv>
                            #web3
                        </HoverDiv>
                    </li>
                    <li>
                        <HoverDiv>
                            #blockchain
                        </HoverDiv>
                    </li>
                    <li>
                        <HoverDiv>
                            #cryptography
                        </HoverDiv>
                    </li>
                    <li>
                        <HoverDiv>
                            #nft
                        </HoverDiv>
                    </li>
                    <li>
                        <HoverDiv>
                            #blockchain
                        </HoverDiv>
                    </li>
                </ul>
            </div>

            <div className="others">

                <strong style={{fontSize:'1.5rem'}} className="my-2">
                    <h3>Others</h3>
                </strong>
                <ul class="other-navigation-links sidebar-navigation-links spec-sidebar-navigation-links">
                    <li className='my-2'>
                        <Link to="/code-of-contact" className="flex leftSidebarLink">
                            <span className="c-link__icon mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                    <g className="nc-icon-wrapper">
                                        <path fill="#FFDB5E" d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"></path>
                                        <path fill="#EE9547" d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"></path>
                                    </g>
                                </svg>
                            </span>
                            Code of Conduct
                        </Link>
                    </li>
                    <li className='my-2'>
                        <Link to="/privacy" className="flex  leftSidebarLink">
                            <span className="c-link__icon mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                    <g transform="translate(4 4)">
                                        <circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle>
                                        <path fill="#664500" d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.094-.628z"></path>
                                        <path fill="#65471B" d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"></path>
                                        <path fill="#FFF" d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"></path>
                                        <path fill="#65471B" d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"></path>
                                        <path fill="#292F33" d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"></path>
                                    </g>
                                </svg>
                            </span>
                            Privacy Policy
                        </Link>
                    </li>

                    <li className='my-2'>
                        <Link to="/terms" className="flex leftSidebarLink">
                            <span class="c-link__icon mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                    <g transform="translate(4 4)">
                                        <ellipse fill="#F5F8FA" cx="8.828" cy="18" rx="7.953" ry="13.281"></ellipse>
                                        <path fill="#E1E8ED" d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"></path>
                                        <circle fill="#8899A6" cx="6.594" cy="18" r="4.96"></circle>
                                        <circle fill="#292F33" cx="6.594" cy="18" r="3.565"></circle>
                                        <circle fill="#F5F8FA" cx="7.911" cy="15.443" r="1.426"></circle>
                                        <ellipse fill="#F5F8FA" cx="27.234" cy="18" rx="7.953" ry="13.281"></ellipse>
                                        <path fill="#E1E8ED" d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"></path>
                                        <circle fill="#8899A6" cx="25" cy="18" r="4.96"></circle>
                                        <circle fill="#292F33" cx="25" cy="18" r="3.565"></circle>
                                        <circle fill="#F5F8FA" cx="26.317" cy="15.443" r="1.426"></circle>
                                    </g>
                                </svg>
                            </span>
                            Terms of use
                        </Link>
                    </li>
                </ul>
             </div>
        </div>
    );
};

export default LeftSideBar;