import React from 'react';
import css from './style.scss';

import { Navbar, NavbarBrand } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

import withSize from 'react-sizeme';
import units from 'units-css';

class NavFixedComponent extends React.Component {
  render() {
    let navHeight = this.props.size.height;
    let navPadding = units.convert('px', css.navFixedModulePadding);
    let fixed = this.props.fixed || 'top';
    let color = this.props.color || 'light';
    let classNames = require('classnames')({
      [css.navFixedModule]: true
    });

    document.body.style.paddingTop = `${navHeight + navPadding}px`;

    return (
      <Navbar className={classNames} fixed={fixed} color={color}>
        <NavbarBrand>{this.props.brand}</NavbarBrand>
        {this.props.children}
      </Navbar>
    );
  }
}

const HeightAwareHoc = withSize({monitorWidth: false, monitorHeight: true});
const HeightAwareNavFixed = HeightAwareHoc(NavFixedComponent);
export { HeightAwareNavFixed as NavFixed };

export class Buttons extends React.Component {
  render() {
    let {vertical, spacing, spacingBottom, color, ...props} = this.props;
    let classNames = require('classnames');
    let parentClassNames, childClassNames;

    parentClassNames = classNames({
      [css.buttonsModule]: true,
      'btn-group-vertical': vertical,
    });

    childClassNames = classNames({
      [`mr-${spacing}`]: (typeof spacing === 'number'),
      [`mb-${spacing}`]: (spacingBottom === true),
      [`mb-${spacingBottom}`]: (typeof spacingBottom === 'number'),
      'rounded': vertical
    });

    if(typeof color === 'string') {
      props.color = color;
    }

    return (
      <div className={parentClassNames}>
        {
          this.props.children.map((child, i) => {
            return (
              <Button key={i} {...child.props} {...props} className={childClassNames}>
                {child.props.children}
              </Button>
            );
          })
        }
      </div>
    );
  }
}

export class ButtonsGroup extends React.Component {
  render() {
    let {vertical, spacing, spacingBottom, color, ...props} = this.props;
    let classNames = require('classnames')({
      [css.buttonsGroupModule]: true,
      [`mr-${spacing}`]: (typeof spacing === 'number'),
      [`mb-${spacing}`]: (spacingBottom === true),
      [`mb-${spacingBottom}`]: (typeof spacingBottom === 'number')
    });

    if(typeof color === 'string') {
      props.color = color;
    }

    return (
      <ButtonGroup vertical={vertical} className={classNames}>
        {
          this.props.children.map((child, i) => {
            return (
              <Button key={i} {...child.props} {...props}>
                {child.props.children}
              </Button>
            );
          })
        }
      </ButtonGroup>
    );
  }
}
