import React from 'react';
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

const LeftSideBar = () => {
    return (
        <div className="bg-white md:bg-transparent lg:bg-transparent px-4 shadow-md md:shadow-none lg:shadow-none min-h-full">
            <div className="flex justify-between items-center md:hidden lg:hidden">
                <h1 className="text-lg md:text-xl lg:text-xl font-bold py-4">DEV Community</h1>
                <MdClose size={26}/>
            </div>
            <div className="py-2">
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={HomeIcon} alt="home"/>
                    <span>Home</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={ReadingList} alt="ReadingList"/>
                    <span>Reading List</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={Listings} alt="Listings"/>
                    <span>Listings</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={Podcasts} alt="Podcasts"/>
                    <span>Podcasts</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={Videos} alt="home"/>
                    <span>Videos</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={Tags} alt="home"/>
                    <span>Tags</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={icFAQ} alt="home"/>
                    <span>FAQ</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={ForemShop} alt="forem-shop"/>
                    <span>Forem Shop</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={Sponsors} alt="home"/>
                    <span>Sponsors</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={About} alt="about"  height={20} width={20}/>
                    <span>About</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={Contact} alt="contact"/>
                    <span>Contact</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={Guides} alt="guides"  height={20} width={20} />
                    <span>Guides</span>
                </div>
                <div className="flex justify-start items-center py-2 gap-2">
                    <img src={SoftwareCompanies} alt="software-companies" height={20} width={20} />
                    <span>Software Companies</span>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;