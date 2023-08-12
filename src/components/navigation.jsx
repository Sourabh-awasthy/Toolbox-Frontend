import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import contacts from "../contacts";

function addTool(contact) {
  return (
    <div>
      <Link to={contact.goto}>
        <DropdownItem>{contact.name}</DropdownItem>
      </Link>
    </div>
  );
}

const NavigationBar = (props) => {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand className="navbar-brand" href="/">
          toolBox
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Tools
              </DropdownToggle>
              <DropdownMenu right>{contacts.map(addTool)}</DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/sourabh-awasthy-38203525a/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Sourabh-awasthy/mern-1">
                GitHub
              </NavLink>
            </NavItem>
            {isLoggedIn ? (
        // Render Logout link if isLoggedIn is true
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
      ) : (
        // Render Login/Sign-Up link if isLoggedIn is false
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login/Sign-Up
          </Link>
        </li>
      )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
