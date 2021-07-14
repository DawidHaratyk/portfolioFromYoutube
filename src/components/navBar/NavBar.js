import React, { useState, useEffect } from "react";
import { avatar } from "../../images/index";
import { NavLink } from "react-router-dom";
import data from "./data";

function NavBar() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [websiteWidth, setWebsiteWidth] = useState(window.innerWidth);

  const menuLinks = data.map((item) => (
    <NavLink
      to={item.path}
      key={item.name}
      className="menu__link"
      activeClassName="active-link"
      onClick={() => setIsSidebarActive(false)}
    >
      {item.name}
    </NavLink>
  ));

  const checkWebsiteWidth = () => {
    if (websiteWidth > 800 && isSidebarActive === false) {
      setIsSidebarActive(true);
    }
    setWebsiteWidth(window.innerWidth);
  };

  useEffect(() => {
    checkWebsiteWidth();
    window.addEventListener("resize", checkWebsiteWidth);
  }, []);

  const handleMenuToggle = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <React.Fragment>
      <nav
        className={`menu ${websiteWidth > 800 ? "active-sidebar" : ""} ${
          isSidebarActive ? "active-sidebar" : ""
        }`}
      >
        <div className="menu__image-container">
          <img src={avatar} alt="avatar" className="menu__image" />
        </div>
        <ul className="menu__list">{menuLinks}</ul>
        <div className="menu__copyright-container">
          <p className="menu__paragraph">© 2021 Lorem Ipsum</p>
        </div>
      </nav>
      {websiteWidth < 800 ? (
        <div className="sidebar__toggler" onClick={handleMenuToggle}>
          <span className="sidebar__line"></span>
          <span className="sidebar__line"></span>
          <span className="sidebar__line"></span>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default NavBar;
