import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './Counter.css';

export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired
  };

  render() {
    const { counter, ...actions } = this.props;

    return (
      <div className="counter">
        <h2>counter: {counter}</h2>
        <p>
          <button
            className={cx(styles.btn, styles.green)}
            onClick={actions.increment}
          >+</button>
          <button
            className={cx(styles.btn, styles.red)}
            onClick={actions.decrement}
          >-</button>
        </p>
      </div>
    );
  }
}
