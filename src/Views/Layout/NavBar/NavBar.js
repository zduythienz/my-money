import React, { Component } from "react";

import { Link } from "react-router-dom";

import LocalAtm from "@material-ui/icons/LocalAtm";
import Share from "@material-ui/icons/Share";
import Apps from "@material-ui/icons/Apps";
import Atm from "@material-ui/icons/Atm";

class NavBar extends Component {
  render() {
    return (
      <div className="s-layout__sidebar">
        {/* <a className="s-sidebar__trigger" href="#0">
          <Atm className="icon-menu--white" fontSize="large" />
        </a> */}
        <Link to="/" className="s-sidebar__trigger">
          <Atm className="icon-menu--white" fontSize="large" />
        </Link>
        <nav className="s-sidebar__nav">
          <ul>
            <li>
              <Link to="/" className="s-sidebar__nav-link">
                <Apps className="icon-menu" />
                <em>Home</em>
              </Link>
            </li>
            <li>
              <Link to="/bills" className="s-sidebar__nav-link">
                <LocalAtm className="icon-menu" />
                <em>Bills</em>
              </Link>
            </li>
            <li>
              <Link to="/bills" className="s-sidebar__nav-link">
                <Share className="icon-menu" />
                <em>Share</em>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
