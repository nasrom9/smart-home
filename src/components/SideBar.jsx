import React from "react";
import {
  AiFillAppstore,
  AiFillSetting,
} from 'react-icons/ai';
import { RiDeviceFill } from 'react-icons/ri';
import { GoThreeBars } from 'react-icons/go';
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.svg'


const SideBar = ({children}) => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <AiFillAppstore />,
    },
    {
      path: "/devices",
      name: "Devices",
      icon: <RiDeviceFill />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <AiFillSetting />,
    },
  ];
  const handleNavLinkClick = (event) => {
    // console.log(event);
    // event.preventDefault();
    event.target.parent.classList.add('ljkj');
    // event.preventDefault();
  };
  return (
    <div className="container">
      <div className="side-bar">
        <div className="top-section">
          <h1 className="logo"><img src={Logo}/></h1>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
