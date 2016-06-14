import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  render() {
    const {
      counter,
      increment,
      decrement
    } = this.props;

    return (
      <div className="counter">
        <h2>counter</h2>
        <p>
          {counter}
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </p>
      </div>
    );
  }
}
