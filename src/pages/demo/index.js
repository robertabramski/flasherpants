import React from 'react';
import css from './style.scss';

import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { TabContent, TabPane } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

import { NavFixed } from 'components/flasherpants';
import { Buttons, ButtonsGroup } from 'components/flasherpants';

export default class Demo extends React.Component {
  state = {
    buttons: {
      color: false,
      active: false,
      disabled: false,
      outline: false,
      size: 'md',
      vertical: false
    },
    nav: {
      fixed: 'top'
    }
  };

  componentDidMount() {
    document.title = 'Flasherpants Demo';
  }

  render() {
    return (
      <Container fluid={true} className={css.module}>
        <NavFixed fixed={this.state.nav.fixed} brand="Flasherpants Demo">
          <Buttons size="sm" color="primary">
            <Button>Here</Button>
            <Button>Here</Button>
            <Button>Here</Button>
          </Buttons>
          <Buttons size="lg" color="danger">
            <Button>Here</Button>
            <Button>Here</Button>
            <Button>Here</Button>
          </Buttons>
        </NavFixed>
        <h2>Buttons</h2>
        <Row noGutters={false}>
          <Col>
            <Buttons
              color={this.state.buttons.color}
              active={this.state.buttons.active}
              disabled={this.state.buttons.disabled}
              outline={this.state.buttons.outline}
              size={this.state.buttons.size}
              vertical={this.state.buttons.vertical}>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="success">Success</Button>
              <Button color="info">Info</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button color="link">Link</Button>
            </Buttons>
            <ButtonsGroup
              color={this.state.buttons.color}
              active={this.state.buttons.active}
              disabled={this.state.buttons.disabled}
              outline={this.state.buttons.outline}
              size={this.state.buttons.size}
              vertical={this.state.buttons.vertical}>
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
