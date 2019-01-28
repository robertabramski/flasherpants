import React from 'react';
import css from './style.scss';

import { Container, Row, Col } from 'reactstrap';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { TabContent, TabPane } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

import { Containment } from 'components/flasherpants';
import { NavbarFixed } from 'components/flasherpants';
import { Buttons, ButtonsGroup } from 'components/flasherpants';

export default class Demo extends React.Component {
  state = {
    containment: {
      fluid: true,
      padded: true,
      spacingOuter: 3
    },
    buttons: {
      color: false,
      active: false,
      disabled: false,
      outline: false,
      size: 'md',
      vertical: false,
      spacing: 2,
      spacingBottom: true
    },
    buttonsGroup: {
      color: false,
      active: false,
      disabled: false,
      outline: false,
      size: 'md',
      vertical: false,
      spacing: 2,
      spacingBottom: true
    },
    navbarFixed: {
      color: 'dark',
      fixed: 'top',
      height: 65,
      spacingBottom: 2,
      spacingOuter: 3
    }
  };

  componentDidMount() {
    document.title = 'Flasherpants Demo';
  }

  render() {
    return (
      <Containment className={css.module}
        fluid={this.state.containment.fluid}
        padded={this.state.containment.padded}
        spacingOuter={this.state.containment.spacingOuter}>
        <NavbarFixed
          fixed={this.state.navbarFixed.fixed}
          color={this.state.navbarFixed.color}
          height={this.state.navbarFixed.height}
          spacingBottom={this.state.navbarFixed.spacingBottom}
          spacingOuter={this.state.navbarFixed.spacingOuter}>
          <NavbarBrand color="dark">Flasherpants</NavbarBrand>
          <Buttons size="sm" color="light" spacing={2}>
            <Button>Here</Button>
            <Button>Here</Button>
            <Button>Here</Button>
          </Buttons>
          <ButtonsGroup size="lg" color="danger">
            <Button>Here</Button>
            <Button>Here</Button>
            <Button>Here</Button>
          </ButtonsGroup>
        </NavbarFixed>
        <h2>Buttons</h2>
        <Row noGutters={false}>
          <Col>
            <Buttons
              color={this.state.buttons.color}
              active={this.state.buttons.active}
              disabled={this.state.buttons.disabled}
              outline={this.state.buttons.outline}
              size={this.state.buttons.size}
              vertical={this.state.buttons.vertical}
              spacing={this.state.buttons.spacing}
              spacingBottom={this.state.buttons.spacingBottom}>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="success">Success</Button>
              <Button color="info">Info</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button color="link">Link</Button>
            </Buttons>
            <br />
            <ButtonsGroup
              color={this.state.buttonsGroup.color}
              active={this.state.buttonsGroup.active}
              disabled={this.state.buttonsGroup.disabled}
              outline={this.state.buttonsGroup.outline}
              size={this.state.buttonsGroup.size}
              vertical={this.state.buttonsGroup.vertical}
              spacing={this.state.buttonsGroup.spacing}
              spacingBottom={this.state.buttonsGroup.spacingBottom}>
              <Button color="success">Left</Button>
              <Button color="warning">Middle</Button>
              <Button color="danger">Right</Button>
            </ButtonsGroup>
          </Col>
        </Row>
      </Containment>
    );
  }
}
