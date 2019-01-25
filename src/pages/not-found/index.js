import React from 'react';
import css from './style.scss';

export default class NotFound extends React.Component {
  componentDidMount() {
    document.title = 'Page Not Found';
  }
  render() {
    return (
      <div className={css.module}>
        <h1>Page Not Found</h1>
      </div>
    );
  }
}
