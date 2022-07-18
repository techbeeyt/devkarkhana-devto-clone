import './Home.css'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'


const Home = () => {
  return (
    <div className="flex">
      <div className="left"> <LeftSidebar/></div>
      <div className='home'>This is Home Page</div>
      <div className="right"><RightSidebar/></div>
    </div>
  )
}

export default Home