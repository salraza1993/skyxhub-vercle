"use client";
import Link from "next/link";
import { useState } from "react";

const DefaultHeader = ({ transparent, headerTop, extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const [topMenus, setTopMenus] = useState([
    {
      title: "Who we are",
      link: "/about",
      // subMenus: [
      //   { title: "About SkyXHub", link: "/about" },
      //   { title: "Career", link: "/career" },
      // ],
    },
    {
      title: "Solutions",
      link: "/solutions",
    },
    {
      title: "AI & Robotics",
      link: "/skai",
    },
    {
      title: "Our Projects",
      link: "/projects",
    },

    {
      title: "Contact",
      link: "/contact",
    },
  ]);

  return (
    <div
      className={`mil-top-position mil-fixed ${extraClass ? extraClass : ""}`}
    >
      {headerTop && (
        <div className="mil-additional-panel">
          <div className="container-fluid">
            <ul className="mil-ap-list">
              <li>
                Phone: <span className="mil-accent">+ 01</span> 800 070 404
              </li>
              <li>Info@mydomain.com</li>
            </ul>
            <div className="mil-ap-call-to-action">
              <div className="mil-icon-frame mil-icon-frame-sm">
                <img src="/img/icons/sm/4.svg" alt="icon" />
              </div>
              <p>Find out how SKYXHUB Could save you over 2.400 US$ a year.</p>
            </div>
            <ul className="mil-ap-list">
              <li>
                <a href="#.">Accounta</a>
              </li>
              <li>
                <a href="#.">English</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className={`mil-top-panel ${
          transparent ? "mil-top-panel-transparent mil-animated" : ""
        }`}
      >
        {/* mil-top-panel-transparent */}
        <div className="container">
          <Link href={"/"} className="mil-logo" style={{ width: 140 }} />
          <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
            <nav>
              <ul>
                {topMenus.map((menu, index) => (
                  <li
                    key={index}
                    className={
                      menu?.subMenus?.length > 0 ? "mil-has-children" : ""
                    }
                  >
                    <Link href={menu.link}>{menu.title}</Link>
                    {menu?.subMenus?.length > 0 && (
                      <ul className="mil-dropdown">
                        {menu.subMenus.map((submenu, subIndex) => (
                          <li key={subIndex}>
                            <Link href={submenu.link}>{submenu.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/+971564167611?text=Hello%20I%20would%20like%20more%20information%20"
                className="mil-button mil-accent-bg mil-button-sm mil-border"
              >
                <span>Talk To an Expert</span>
              </a>
            </nav>
          </div>
          {/* mobile menu button */}
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
          {/* mobile menu button end */}
        </div>
      </div>
    </div>
  );
};
export default DefaultHeader;
