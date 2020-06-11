import React from 'react';
import { connect } from 'react-redux';

const CounterComponent = (props) => {
  const { counter, dispatch } = props;
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: 'ADD'})}>Add 1</button>
      <button onClick={() => dispatch({ type: 'REMOVE'})}>Remove 1</button>
      <button onClick={() => dispatch({ type: 'ADD10'})}>Add 10</button>
      <button onClick={() => dispatch({ type: 'REMOVE10'})}>Remove 10</button>
      <button onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
    </>
  )
}
const mapStateToProps = state => ({
  counter: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent)

export default CounterContainer;