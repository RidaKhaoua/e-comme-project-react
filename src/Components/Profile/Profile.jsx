
import "./Profile.css"
import userAvatar from "../../assets/Images/user-avatar.png"
import { useAuth } from "../../Context/AuthContext"

function Profile({handelLogout}) {
  const {user} = useAuth();
  return (
    <div className='profile'>
        {user.isAuth && <div className="user"> 
            <img src={userAvatar} />
            <div className="info">
              <p>UserName: {user.userName}</p>
              <p>Password: {user.email}</p>
              <button className="logout" onClick={handelLogout}>Logout</button>  
            </div>
          </div>}
    </div>
  )
}

export default Profile