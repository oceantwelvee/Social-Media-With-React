import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className={s.nav}>
          <div className={s.item}> 
          <NavLink to="/profile">Profile</NavLink>
          </div>
          <div className={s.item}> 
          <NavLink to='/dialogs'>Messages</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to='/friends'>Friends</NavLink>
          </div>
          <div className={s.item}> 
          <NavLink to='/news'>News</NavLink>
          </div>
          <div className={s.item}> 
          <NavLink to='/music'>Music</NavLink>
          </div>
          <div className={s.item}> 
          <NavLink to='/users'>Users</NavLink>
          </div>
          <div className={s.item}> 
          <NavLink to='/settings'>Settings</NavLink>
          </div>
         
         
       </nav>
    );
}

export default Navbar;