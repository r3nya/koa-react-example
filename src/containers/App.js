import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import { Counter } from '../components';

const mapStateToProps = (state) => (
  { counter: state.counter }
);

const mapDispatchToProps = () => ({
  increment,
  decrement
});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {

  };

  render() {
    const {
      counter,
      increment,
      decrement
    } = this.props;

    return (
      <div id="app">
        <h1>Hello world! It's my Koa-React-Example app.</h1>
      </div>
    );
  }
}
