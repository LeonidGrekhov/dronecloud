import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/index' >
            Home
          </NavLink>
          <NavLink to='/booking' >
            Bookings
          </NavLink>
          <NavLink to='/profile' >
            Profile
          </NavLink>
          <NavLink to='/team' >
            Teams
          </NavLink>
          <NavLink to='/blogs' >
            Blogs
          </NavLink>
          <NavLink to='/sign-up' >
            Register
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;