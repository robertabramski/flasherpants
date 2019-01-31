import React from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';

import { Container } from 'reactstrap';
import { Navbar } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { Form } from 'reactstrap';

import units from 'units-css';

function convertMapToObject(map) {
  let chars = '%0-9a-z\.';
  let kvRegex = new RegExp(`([${chars}]+): ([${chars}]+)`, 'g');
  let mapObject = new Object();

  map.match(kvRegex).forEach(kv => {
    let k = kv.split(':')[0];
    let v = kv.split(':')[1].trim();

    mapObject[k] = v;
  });

  return mapObject;
}

//!FormInline
export class FormInline extends React.Component {
  render() {
    let { spacing, spacingBottom, ...props } = this.props;
    let childClassNames = require('classnames')({
      [`mr-${spacing}`]: (typeof spacing === 'number'),
      [`mb-${spacing}`]: (spacingBottom === true),
      [`mb-${spacingBottom}`]: (typeof spacingBottom === 'number')
    });

    return (
      <Form {...props} inline={true} className={css.formInlineModule}>
        {
          React.Children.map(this.props.children, (child, i) => {
            return (
              <child.type {...child.props} {...props} className={childClassNames}>
                {child.props.children}
              </child.type>
            );
          })
        }
      </Form>
    );
  }
}

FormInline.propTypes = {
  spacing: PropTypes.number,
  spacingBottom: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
};

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
    let spacersMap = convertMapToObject(css.spacersMap);
    let navPadding = spacingBottom === (0 || undefined) ? 0 : convertSpacingToPx();

    style = {
      height: navHeight
    };

    classNames = require('classnames')({
      [css.navFixedModule]: true,
      [`px-${spacingOuter}`]: (typeof spacingOuter === 'number')
    });

    document.body.style.paddingTop = (fixed === 'top' ? `${navHeight + navPadding}px`: 0);

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
          React.Children.map(this.props.children, (child, i) => {
            return (
              <child.type {...child.props} {...props} className={childClassNames}>
                {child.props.children}
              </child.type>
            );
          })
        }
      </div>
    );
  }
}

//!ButtonsGroup
export class ButtonsGroup extends React.Component {
  render() {
    let {vertical, spacing, spacingBottom, className, color, ...props} = this.props;
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
          React.Children.map(this.props.children, (child, i) => {
            return (
              <child.type {...child.props} {...props}>
                {child.props.children}
              </child.type>
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
