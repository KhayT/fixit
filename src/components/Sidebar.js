import React from "react";
import { NavLink } from "react-router-dom";
import closeBtn from "../images/x.svg";
import logo from "../images/logo.png";
import { DashboardIcon, SettingsIcon, HomeIcon } from "./svgs/Icons";
import { StyledSidebar } from "./styles/SideBar.styled";

const Sidebar = (props) => {
  return (
    <StyledSidebar className={props.className}>
      <img src={closeBtn} alt="" onClick={props.closeMenuHandler} />
      <img src={logo} alt="" />

      <ul>
        <li>
          <NavLink to="/home">
            <HomeIcon />
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <DashboardIcon />
            Dashboard
          </NavLink>
        </li>
      </ul>

      <NavLink to="/">
        <SettingsIcon />
        Settings
      </NavLink>
    </StyledSidebar>
  );
};

export default Sidebar;
