import React from 'react';
import css from './style.scss';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);

    document.title = 'Demo';
  componentDidMount() {
    document.title = 'Flasherpants Demo';
  }

  render() {
    return (
      <div className={css.module}>
        <h1>Welcome to Demo</h1>
      </div>
    );
  }
}
