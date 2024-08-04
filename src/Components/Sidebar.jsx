import React from "react";
import "../Components/Components.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div className="sb-sidenav-menu">
        <div className="nav">
            <div className="all-sidenavs">
          <div className="sidenav topics">
            <Link className="topics" to={'/'}>
              <i className="fa fa-home" aria-hidden="true" /> <b className="topicname">HOME</b>
            </Link>
          </div>
          <div  className="sidenav topics">
            <Link className="topics" to={"/createbooks"}>
              <i className="fa fa-book" aria-hidden="true" /> <b className="topicname">ADDBOOKS</b>
            </Link>
          </div>
          <div  className="sidenav topics">
            <Link className="topics" to={"/managebooks"}>
              <i className="fa fa-user" aria-hidden="true" /> <b className="topicname">MANAGEBOOKS</b>
            </Link>
          </div>
        </div>   
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
