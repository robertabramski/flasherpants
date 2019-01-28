import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';

import { Container } from 'reactstrap';
import { Navbar } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

import units from 'units-css';

function convertSpacerMapToObject(spacersMap) {
  let cssUnits = 'rem';
  let kvRegex = new RegExp(`([0-9]): ([0-9/.${cssUnits}]+)`, 'g');
  let spacersMapObject = new Object();

  spacersMap.match(kvRegex).forEach(kv => {
    let k = kv.split(':')[0];
    let v = kv.split(':')[1].trim();

    spacersMapObject[k] = v;
  });

  return spacersMapObject;
}

export class Containment extends React.Component {
  render() {
    let classNames;
    let { padded, spacingOuter, ...props} = this.props;

    if(padded === undefined) {
      padded = true;
    }

    classNames = require('classnames')({
      [css.containmentModule]: true,
      [`px-${spacingOuter}`]: padded && (typeof spacingOuter === 'number'),
      'px-0': !padded
    });

    return (
      <Container {...props} className={classNames}>
        {this.props.children}
      </Container>
    );
  }
}

Containment.propTypes = {
  padded: PropTypes.bool,
  spacingOuter: PropTypes.number
};

export class NavbarFixed extends React.Component {
  render() {
    let { spacingOuter, spacingBottom, ...props } = this.props;
    let style, classNames;
    let navHeight = this.props.height;
    let fixed = this.props.fixed || 'top';
    let color = this.props.color || 'dark';
    let convertSpacingToPx = () => units.convert('px', spacersMap[spacingBottom]);
    let spacersMap = convertSpacerMapToObject(css.spacersMap);
    let navPadding = spacingBottom === (0 || undefined) ? 0 : convertSpacingToPx();

    style = {
      height: navHeight
    };

    classNames = require('classnames')({
      [css.navFixedModule]: true,
      [`px-${spacingOuter}`]: (typeof spacingOuter === 'number')
    });

    if(fixed === 'top') {
      document.body.style.paddingTop = `${navHeight + navPadding}px`;
    }

    return (
      <Navbar {...props} className={classNames} fixed={fixed} style={style}>
        {this.props.children}
      </Navbar>
    );
  }
}

NavbarFixed.propTypes = {
  fixed: PropTypes.oneOf(['top', 'bottom']),
  color: PropTypes.string,
  height: PropTypes.number.isRequired,
  spacingBottom: PropTypes.number,
  spacingOuter: PropTypes.number
};

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

Buttons.propTypes =
ButtonsGroup.propTypes = {
  vertical: PropTypes.bool,
  spacing: PropTypes.number,
  spacingBottom: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  color: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
};
