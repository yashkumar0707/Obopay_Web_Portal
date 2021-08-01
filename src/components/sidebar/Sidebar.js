//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Side.css";
import configData from '../../config.json'

// import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const check = <RiPencilLine />
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="sidebar">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>Logo</p>
            </div>

          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">

             
                <MenuItem active={false} icon={<FiHome />}>
                <Link to='/dashboard'>
                  Home
                  </Link>
                </MenuItem>
              


             
                <MenuItem active={false} icon={<FiHome />}>
                <Link to='/newtrip'>
                  New Trip
                  </Link>
                </MenuItem>

            


              
                <MenuItem active={false} icon={<FaList />}><Link to='/assigndriver'>Assign Driver</Link></MenuItem>
              
              <MenuItem icon={<FaRegHeart />}>Previous</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Rebalance</MenuItem>
              {/* <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle />
              ) : (
                <FiArrowLeftCircle />
              )}
            </div>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;