import React from 'react';
import css from './style.scss';
import NavHeader from 'components/nav-header';

export default class AnotherPage extends React.Component {
  render() {
    return (
      <div className={css.module}>
        <NavHeader />
        <h1>Page Not Found</h1>
      </div>
    );
  }
}
