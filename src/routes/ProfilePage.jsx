

import { useAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const {logout} = useAuth();
  const navigate = useNavigate();
  return (
    <div className='profile-page'>
      <button onClick={() => {
        logout();
        navigate("/")
      }}>Logout</button>
    </div>
  )
}

export default ProfilePage