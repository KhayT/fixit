import React from "react";
import logo from "../images/logo.png";
import menu from "../images/menu.jpg";
import message from "../images/message.svg";

import notificaton from "../images/notification.svg";
import profilePhoto from "../images/profile photo.jpg";
import search from "../images/search.svg";

import {
  StyledWebAppNav,
  NavItems,
  ProfilePictureContainer,
  LogoContainer,
} from "./styles/WebAppNav.styled";

const WebAppNav = (props) => {
  return (
    <StyledWebAppNav>
      <LogoContainer>
        <div>
          <img src={menu} alt="" onClick={props.openMenuHandler} />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </LogoContainer>

      <NavItems>
        <button>
          <img src={message} alt="" />
          New Request
        </button>
        <ProfilePictureContainer>
          <div>
            <img src={search} alt="" />
            <div>
              <img src={notificaton} alt="" />
            </div>
          </div>

          <img src={profilePhoto} alt="" />
        </ProfilePictureContainer>
      </NavItems>
    </StyledWebAppNav>
  );
};

export default WebAppNav;
