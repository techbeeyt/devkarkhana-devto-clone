import "./Profile.css";
import { useParams } from "react-router-dom";
import Footer from "./../Footer/Footer";

const Profile = () => {
  const { username } = useParams();
  console.log(username);
  return (
    <div className="profile-container">
      <div className="profile">Welcome to profile</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
