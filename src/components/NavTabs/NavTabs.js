import React from "react";
import "./NavTabs.css";
const NavTabs = props => (
  <ul className="nav nav-tabs uls">
   
    <li className="nav-item ">
      <a
        onClick={() => props.handlePageChange("Welcome")}
        className={
          props.currentPage === "Welcome" ? "nav-link  " : "nav-link"
        }
      >
        Home
      </a>
    </li>
    {/* <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Projects")}
        className={
          props.currentPage === "Projects" ? "nav-link " : "nav-link"
        }
      >
        Projects
      </a>
    </li> */}
    {/* <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Contact")}
        className={
          props.currentPage === "Contact" ? "nav-link " : "nav-link"
        }
      >
        Contact Me
      </a>
    </li> */}
  </ul>
);

export default NavTabs;
