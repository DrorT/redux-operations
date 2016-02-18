import React, { Component, PropTypes } from 'react'
import {walkState} from '../store/reduxQL';
import {increment1} from '../actions/counter';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
  return {
    counter: walkState(props.location, state)
  }
}


@connect(mapStateToProps)
export default class Counter extends Component {
  render() {
    const { location, counter, dispatch } = this.props
    return (
      <div>
        <p>
          Clicked: {counter} times
          {' '}
          <button onClick={this.inc1}>+</button>
          {' '}
        </p>
      </div>
    )
  }

  inc1 = () => {
    const {dispatch, location} = this.props;
    console.log(location);
    dispatch(increment1(location, 'counter'))
  }
}
