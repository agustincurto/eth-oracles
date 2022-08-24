import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/datafeeds" activeStyle>
            Data Feeds
          </NavLink>
          <NavLink to="/vrfs" activeStyle>
            VRF
          </NavLink>
          <NavLink to="/keepers" activeStyle>
            Keepers
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
