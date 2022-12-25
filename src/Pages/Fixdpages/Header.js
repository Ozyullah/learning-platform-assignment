import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdLogIn } from 'react-icons/io';
import { RiLogoutCircleFill } from 'react-icons/ri'
import img from '../../assets/navimg/cse image_prev_ui.png'
import { AuthContext } from '../../Context/MassContext';
import { Tooltip } from '@mui/material';


const Header = () => {

  const { user, logOut } = useContext(AuthContext)
  console.log(user)


  const handleLogeOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
        console.error('firebase error', error)
      })
  }
  return (
    <div>
      <div className="navbar bg-light-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to={'/courses'}>Courses</Link></li>
              <li tabIndex={0}>
                <Link to={'/faq'} className="justify-between">
                  FAQ
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>
                <ul className="p-2">
                  <li><a href="#">Submenu 1</a></li>
                  <li><a href="#">Submenu 2</a></li>
                </ul>
              </li>
              <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
          </div>
          <Link to={'/'} className='flex items-center text-xl font-bold'>
            <img className='h-12' src={img} alt="" />
            CSE Tutorial
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={'/courses'}>Courses</Link></li>
            <li tabIndex={0}>
              <Link to={'/faq'}>
                FAQ
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </Link>
              <ul className="p-2">
                <li><a href="#">Submenu 1</a></li>
                <li><a href="#">Submenu 2</a></li>
              </ul>
            </li>
            <li><Link to={'/blog'}>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">

          <div className='m-3'>
            {
              user?.uid ?
                <div className='flex'>
                  <Tooltip title={user?.displayName ? user.displayName : 'Name not founded'
                  } arrow>
                    <img className='w-4 rounded-md mr-3' src={user.photoURL} alt=""></img>

                  </Tooltip>

                  <button title='log out' onClick={handleLogeOut}><RiLogoutCircleFill /></button>
                </div> :
                <Link to={'/login'} title="please login"><IoMdLogIn /></Link>

            }
          </div>

            
              <label for='check' className=' w-12 h-5 bg-gray-300 outline rounded-full relative cursor-pointer'>
                <input type="checkbox" id="check" className='sr-only peer' />
                <span className='w-1/3 h-4/6 bg-blue-400 rounded-full absolute left-1 top-1 peer-checked:bg-blue-600 peer-checked:left-7'></span>
              </label>
            
    

        </div>
      </div>
    </div>
  );
};

export default Header;