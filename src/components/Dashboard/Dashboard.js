import "./Dashboard.css";
import { Link } from "react-router-dom";
import Footer from "./../Footer/Footer";

const Dashboard = () => {
  return (
    <div className=" px-5 ">
      <h1 className="title">Dashboard</h1>

      <select className="Select block md:hidden">
        <option>Posts (0)</option>
        <option>Followers (0)</option>
        <option>Followings tags(0)</option>
        <option>Followings users(0)</option>
        <option>Followings organizations(0)</option>
        <option>Followings podcasts(0)</option>
        <option>Listings</option>
        <option>Analytics</option>
      </select>

      <div class="grid grid-cols-2  md:grid-cols-4 gap-4">
        <div className="Card">
          <div className="Card-title">0</div>
          <div className="Card-desc">Total post reactions</div>
        </div>
        <div className="Card">
          <div className="Card-title"> 500</div>
          <div className="Card-desc">Total post views</div>
        </div>
        <div className="Card">
          <div className="Card-title">0</div>
          <div className="Card-desc">Listings Created</div>
        </div>
        <div className="Card">
          <div className="Card-title">0</div>
          <div className="Card-desc">Cradits availables</div>
        </div>
      </div>

      <div className="main grid grid-cols-12 mt-5">
        <div className=" hidden md:block md:col-span-3 pr-3 pt-1">
          <div className="item bg-white">
            <div className="li-title">Posts</div>
            <div className="count">0</div>
          </div>
          <div className="item">
            <div className="li-title">Series</div>
            <div className="count">0</div>
          </div>
          <div className="item">
            <div className="li-title">Followers</div>
            <div className="count">12</div>
          </div>
          <div className="item">
            <div className="li-title">Following tags</div>
            <div className="count">0</div>
          </div>
          <div className="item">
            <div className="li-title">Following users</div>
            <div className="count">0</div>
          </div>
          <div className="item">
            <div className="li-title">Following organizations</div>
            <div className="count">0</div>
          </div>
          <div className="item">
            <div className="li-title">Following podcasts</div>
            <div className="count">0</div>
          </div>
          <div className="item">
            <div className="li-title">Following tags</div>
            <div className="count">0</div>
          </div>
          <div className="item">
            <div className="li-title">Listings</div>
          </div>
          <div className="item flex">
            <div className="li-title">Analytics</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              className="crayons-icon ml-1 mt-1"
            >
              <path d="M10.667 8v1.333H7.333v7.334h7.334v-3.334H16v4a.666.666 0 01-.667.667H6.667A.666.666 0 016 17.333V8.667A.667.667 0 016.667 8h4zM18 6v5.333h-1.333V8.275l-5.196 5.196-.942-.942 5.194-5.196h-3.056V6H18z"></path>
            </svg>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h1 className="posts-title">Posts</h1>
          <div class="p-6 m:p-9 bg-white align-center fs-l w-100 h-100 flex items-center justify-center flex-1">
            <div className="post-elements">
              <img
                className="sloan mb-7"
                alt="Mascot image"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--XHE_XeFn--/c_imagga_scale,f_auto,fl_progressive,q_auto,w_300/https://dev-to-uploads.s3.amazonaws.com/i/y5767q6brm62skiyywvc.png"
              />
              <p className="mb-6">
                This is where you can manage your posts, but you haven't written
                anything yet.
              </p>
              <p>
                <Link to="/dashboard">
                  <button className="rounded-full btn bg-blue-500">
                    Write your first post now
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
