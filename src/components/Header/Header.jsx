import { useContext } from 'react';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(result =>{
      console.log('user logout Succsessfully');
    })
    .catch(error =>{
      console.log(error);
    })
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg rounded-lg">
        <div className="flex-1">
          <img className='w-56' src={logo} alt="" />
        </div>
        <div className="flex-none gap-2">
          
          <div className="dropdown dropdown-end">
                {
                  user? <>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                  
                  <img src={user.photoURL? user.photoURL : 'https://tse1.mm.bing.net/th?id=OIP.WPmdNoTzIuLFH4m-D36ArAEsEs&pid=Api&P=0&h=220'} />
                  </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={'/profile'} className="justify-between">
                  Profile
                  
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
                  </>: <button className='btn bg-sky-400 '><Link to={'/login'}>Login</Link></button>
                }
                
              
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
