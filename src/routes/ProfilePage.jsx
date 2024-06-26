import { Container } from "@mui/material";
import Profile from "../Components/Profile/Profile";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handelLogout = () => {
    logout();
    navigate("/e-comme-project-react");
  };
  return (
    <div className="profile-page">
      <div className="container">
        <Profile handelLogout={handelLogout} />
      </div>
    </div>
  );
}

export default ProfilePage;
