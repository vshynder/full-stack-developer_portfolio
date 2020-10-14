import React, { useState } from "react";

import SidebarNav from "./SidebarNav";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";

const Sidebar = () => {
  const [isAboutMe, setIsAboutMe] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <SidebarNav isAboutMe={isAboutMe} toggleNav={setIsAboutMe} />
        <div className="sidebar__content">
          {isAboutMe ? <AboutMe /> : <MySkills />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
