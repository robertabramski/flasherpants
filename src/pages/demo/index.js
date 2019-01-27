import React from 'react';
import css from './style.scss';

import { Container, Row, Col } from 'reactstrap';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { TabContent, TabPane } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

import { NavbarFixed } from 'components/flasherpants';
import { Buttons, ButtonsGroup } from 'components/flasherpants';

export default class Demo extends React.Component {
  state = {
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
    nav: {
      color: 'dark',
      fixed: 'top',
      height: 65,
      spacing: 3
    }
  };

  componentDidMount() {
    document.title = 'Flasherpants Demo';
  }

  render() {
    return (
      <Container fluid={true} className={css.module}>
        <NavbarFixed
          fixed={this.state.nav.fixed}
          color={this.state.nav.color}
          height={this.state.nav.height}
          spacing={this.state.nav.spacing}>
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
              color={this.state.buttons.color}
              active={this.state.buttons.active}
              disabled={this.state.buttons.disabled}
              outline={this.state.buttons.outline}
              size={this.state.buttons.size}
              vertical={this.state.buttons.vertical}
              spacing={this.state.buttons.spacing}
              spacingBottom={this.state.buttons.spacingBottom}>
              <Button color="success">Left</Button>
              <Button color="warning">Middle</Button>
              <Button color="danger">Right</Button>
            </ButtonsGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
