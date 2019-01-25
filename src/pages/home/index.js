import React from 'react';
import css from './style.scss';

export default class Home extends React.Component {
  componentDidMount() {
    document.title = 'Home';
  }

  render() {
    return (
      <div className={css.module}>
        <h1>Welcome to Flasherpants</h1>
      </div>
    );
  }
}
