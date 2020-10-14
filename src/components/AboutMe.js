import React from "react";

import * as avatar from "../images/photo-avatar.png";

import Socials from "./aboutMe/Socials";
import Info from "./aboutMe/Info";

export default function AboutMe() {
  return (
    <>
      <div className="sidebar__image">
        <img alt="photo_of_me" src={avatar} />
      </div>
      <Info />
      <div className="sidebar__contact">
        <button className="sidebar__contact-button">Contact me</button>
        <p className="sidebar__contact-email">vl.shynder@gmail.com</p>
        <Socials />
      </div>
    </>
  );
}
