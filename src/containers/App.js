import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import { Counter } from '../components';

const mapStateToProps = (state) => (
  { counter: state.counter }
);

const mapDispatchToProps = {
  increment,
  decrement
};

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleIncrement = ::this.handleIncrement;
    this.handleDecrement = ::this.handleDecrement;
  }

  handleIncrement() {
    this.props.increment();
  }

  handleDecrement() {
    this.props.decrement();
  }

  render() {
    const { counter } = this.props;

    return (
      <div id="app">
        <h1>Hello world! <small>It's my Koa-React-Example app.</small></h1>
        <Counter
          counter={counter}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
        />
      </div>
    );
  }
}
