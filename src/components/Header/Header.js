import React from 'react';
import './Header.css'
import { AppBar, Toolbar } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import configData from '../../config.json';
import logo from './app-logo-white.png'
// import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
const Header =(props)=>{
    const displayDesktop = () => {
        return <Toolbar className="yash">
          {/* {process.env.REACT_APP_TITLE} */}
           
          <img src={logo} alt="Logo" style = {{width:80, height:50}}/>
          <SettingsIcon className="settings"></SettingsIcon>
          <AccountCircleIcon className="user"></AccountCircleIcon>
          
          </Toolbar>;
      };
      
      return (
        <header>
          <AppBar className="MuiAppBar">{displayDesktop()}</AppBar>
        </header>
      );
}
export default Header;