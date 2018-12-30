import React from 'react';
import css from './style.scss';

export default class App extends React.Component {
  render() {
    return <h1 className={css.welcomeMessage}><span>Welcome</span> to Flasherpants!</h1>;
  }
}
