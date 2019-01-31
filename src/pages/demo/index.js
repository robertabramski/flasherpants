import React from 'react';
import css from './style.scss';

import { Container, Row, Col } from 'reactstrap';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { TabContent, TabPane } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

import { Containment } from 'components/flasherpants';
import { NavbarFixed } from 'components/flasherpants';
import { Buttons, ButtonsGroup } from 'components/flasherpants';
import { FormInline } from 'components/flasherpants';

import update from 'immutability-helper';

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
      color: 'primary',
      active: false,
      disabled: false,
      outline: false,
      size: 'md',
      vertical: false,
      spacing: 2,
      spacingBottom: true
    },
    formInline: {
      spacing: 2
    },
    navbarFixed: {
      color: 'dark',
      fixed: 'top',
      height: 65,
      spacingBottom: undefined,
      spacingOuter: undefined
    }
  };

  componentDidMount() {
    document.title = 'Flasherpants Demo';
  }

  updateDisplay = (target, value) => event => {
    let parts = target.split('.');
    let component = parts[0], prop = parts[1];
    let newState, eventValue;

    if(!value) {
      switch(event.target.type) {
        case 'number':
          //let min = parseInt(event.target.min), max = parseInt(event.target.max);
          let val = parseInt(event.target.value);

          if(isNaN(val)) {
            event.preventDefault();
            return false;
          }
          else eventValue = val;

        break;

        default: eventValue = parseInt(event.target.value);
      }
    }

    newState = update(this.state, {
      [component]: {[prop]: {$set: value || eventValue}}
    });

    this.setState({[component]: newState[component]});
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
          <NavbarBrand>NavFixed</NavbarBrand>
          <FormInline
            spacing={this.state.formInline.spacing}
            onSubmit={event => event.preventDefault()}>
            <FormGroup>
              <Label for="height">Height</Label>
              <Input
                name="height"
                type="number"
                min="50" max="100"
                value={this.state.navbarFixed.height}
                onChange={this.updateDisplay('navbarFixed.height')} />
            </FormGroup>
            <ButtonsGroup size="md" color="gray-600">
              <Button
                onClick={this.updateDisplay('navbarFixed.fixed', 'top')}
                active={this.state.navbarFixed.fixed === 'top'}>Top
              </Button>
              <Button
                onClick={this.updateDisplay('navbarFixed.fixed', 'bottom')}
                active={this.state.navbarFixed.fixed === 'bottom'}>Bottom
              </Button>
            </ButtonsGroup>
          </FormInline>
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
