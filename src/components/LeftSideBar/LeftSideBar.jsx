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
import './LeftSidebar.css'
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    return (
        <div className={`bg-white md:bg-transparent lg:bg-transparent px-4 shadow-md md:shadow-none lg:shadow-none min-h-full`}>
            <div className="flex justify-between items-center md:hidden lg:hidden">
                <h1 className="text-lg md:text-xl lg:text-xl font-bold py-4">DEV Community</h1>
                <MdClose className={`closeButton`} size={26}/>
            </div>
            <div className="py-2">
                <Link to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={HomeIcon} alt="home"/>
                    <span>Home</span>
                </Link>
                <Link to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={ReadingList} alt="ReadingList"/>
                    <span>Reading List</span>
                </Link>
                <Link to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={Listings} alt="Listings"/>
                    <span>Listings</span>
                </Link>
                <Link  to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={Podcasts} alt="Podcasts"/>
                    <span>Podcasts</span>
                </Link>
                <Link  to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={Videos} alt="home"/>
                    <span>Videos</span>
                </Link>
                <Link  to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={Tags} alt="home"/>
                    <span>Tags</span>
                </Link>
                <Link  to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={icFAQ} alt="home"/>
                    <span>FAQ</span>
                </Link>
                <Link to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={ForemShop} alt="forem-shop"/>
                    <span>Forem Shop</span>
                </Link>
                <Link to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={Sponsors} alt="home"/>
                    <span>Sponsors</span>
                </Link>
                <Link to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={About} alt="about"  height={20} width={20}/>
                    <span>About</span>
                </Link>
                <Link to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={Contact} alt="contact"/>
                    <span>Contact</span>
                </Link>
                <Link to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={Guides} alt="guides"  height={20} width={20} />
                    <span>Guides</span>
                </Link>
                <Link  to='/' className="leftSidebarLink flex justify-start items-center py-2 gap-2">
                    <img src={SoftwareCompanies} alt="software-companies" height={20} width={20} />
                    <span>Software Companies</span>
                </Link>
            </div>
        </div>
    );
};

export default LeftSideBar;