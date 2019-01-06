import React from 'react';
import css from './style.scss';
import NavHeader from 'components/nav-header';

export default class Page extends React.Component {
  render() {
    return (
      <div className={css.module}>
        <NavHeader />
        <h1>Welcome to Page</h1>
      </div>
    );
  }
}
