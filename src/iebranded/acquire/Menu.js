import React, { Component } from "react";
import {
  Navbar,
  Container,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler
} from "reactstrap";
import { Session } from "@myie/interact";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  isActive(route, exact) {
    if (exact) {
      return window.location.pathname === route;
    }
    var re = new RegExp(`^${route}[/]{0,1}`);
    return window.location.pathname.match(re);
  }

  toggle() {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen
    });
  }

  render() {
    if (!Session.isAuthenticated()) {
      return <div />;
    }
    return (
      <Navbar color="dark" dark expand="md" aria-label="Main Menu">
        <Container>
          <NavbarToggler onClick={this.toggle} aria-label="Menu" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto">
              <NavItem active={this.isActive("/", true)}>
                {" "}
                <Link id="home-menu-item" className="nav-link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem active={this.isActive("/applications")}>
                <Link
                  id="applications-menu-item"
                  className="nav-link"
                  to="/applications/"
                >
                  Applications
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Menu;
