import React from 'react';
import css from './style.scss';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Collapse,
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap';

export default class NavHeader extends React.Component {
  state = {
    toggle: false,
    isOpen: false
  };

  render() {
    return (
      <div className={css.module}>
        <Navbar color="light" light expand="md">
          <LinkContainer to="/">
            <NavbarBrand>Flasherpants</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://github.com/robertabramski/flasherpants">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Components</DropdownToggle>
                <DropdownMenu right>
                  <LinkContainer to="/demo">
                    <DropdownItem>Demo</DropdownItem>
                  </LinkContainer>
                  <DropdownItem divider />
                  <LinkContainer to="/no-page">
                    <DropdownItem>No Page</DropdownItem>
                  </LinkContainer>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
