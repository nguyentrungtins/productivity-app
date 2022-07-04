import React from "react";
import { FaBars } from "react-icons/fa";
const SideBar = () => {
  const handleClickActive = (e) => {
    // Toggle isActive state on click
    /* == Active attribute == */
    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink(e) {
      linkColor.forEach((item) => item.classList.remove("active"));
      e.currentTarget.classList.toggle("active");
    }
    linkColor.forEach((item) => colorLink(e));
  };
  return (
    <div className="container" id="navbar">
      <nav className="nav">
        <div>
          <div className="nav_brand">
            <div>
              <ion-icon
                name="menu-outline"
                class="nav_toggle"
                id="nav-toggle"
              ></ion-icon>
            </div>

            <a href="#" className="nav_logo">
              Menu
            </a>
          </div>
          <ul>
            <li>
              <a
                href="#"
                className="nav_link active"
                onClick={handleClickActive}
              >
                <ion-icon name="home" class="nav_icon"></ion-icon>
                <span className="nav_name">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav_link" onClick={handleClickActive}>
                <ion-icon name="stats-chart" class="nav_icon"></ion-icon>
                <span className="nav_name">Analytics</span>
              </a>
            </li>
          </ul>
        </div>

        <a href="#" className="nav_link">
          <ion-icon name="log-out-outline" class="nav_icon"></ion-icon>
          <span className="nav_name">Log Out</span>
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
