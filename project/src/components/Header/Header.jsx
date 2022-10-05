/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import  head from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <header className={head.header}>
    <img src="https://api.freelogodesign.org/assets/thumb/logo/5072150_400.png"/>
            
            <div className={head.loginBlock}>
              { props.isAuth ? props.login
              : <NavLink to={'/login'}>Login</NavLink> }
            </div>
   </header>
    )
}

export default Header;