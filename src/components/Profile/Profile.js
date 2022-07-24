import "./Profile.css";
import { useParams } from "react-router-dom";
import Footer from "./../Footer/Footer";
import { useState } from "react";

const Profile = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { username } = useParams();
  console.log(username);
  return (
    <div className="profile-container">
      <div className="dark"></div>
      <div className="profile w-screen md:w-10/12">
        <div className="image-container">
          <img
            src={`https://m.behindwoods.com/tamil-movies/cinema-articles-photos/the-many-lives-of-fahadh-faasil-photos-pictures-stills.jpg`}
            alt=""
            className="image"
          />
        </div>

        <div className="edit-button-conteianer">
          <button className="btn edit-profile-button">Edit Profile</button>
        </div>

        <div className="desc ">
          <div className="constent">
            <h1 className="name">Sujon Ali</h1>
            <p className="bio">404 Bio not found</p>
            <p>Joined on Jul 8, 2022</p>
          </div>
        </div>

        <div
          className="see-more hidden"
          style={{ display: `${!seeMore ? "" : "none"}` }}
        >
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="btn seemore-button"
          >
            See more details about @username
          </button>
        </div>
      </div>

      <div
        className={`more ${
          seeMore ? "block" : "hidden"
        } md:block w-screen md:w-10/12`}
      >
        <div className="crayons-card crayons-card--secondary p-4">
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="akhufb89qlktpx5tet4kq3oa8zthyob8"
              className="crayons-icon mr-3 color-base-50"
            >
              <title id="akhufb89qlktpx5tet4kq3oa8zthyob8">Post</title>
              <path d="M19 22H5a3 3 0 01-3-3V3a1 1 0 011-1h14a1 1 0 011 1v12h4v4a3 3 0 01-3 3zm-1-5v2a1 1 0 002 0v-2h-2zm-2 3V4H4v15a1 1 0 001 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"></path>
            </svg>
            0 posts published
          </div>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="abyviqjwnuleujykcr43bm5jdp5slovg"
              className="crayons-icon mr-3 color-base-50"
            >
              <title id="abyviqjwnuleujykcr43bm5jdp5slovg">Comment</title>
              <path d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
            </svg>
            0 comments written
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="acoveudwzvz5peb9fto740su0frcx4u2"
              className="crayons-icon mr-3 color-base-50"
            >
              <title id="acoveudwzvz5peb9fto740su0frcx4u2">Tag</title>
              <path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"></path>
            </svg>
            12 tags followed
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
