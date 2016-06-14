import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const {
      counter,
      ...actions
    } = this.props;

    return (
      <div className="counter">
        <h2>counter</h2>
        <p>
          {counter}
          <button onClick={actions.increment}>+</button>
          <button onClick={actions.decrement}>-</button>
        </p>
      </div>
    );
  }
}
