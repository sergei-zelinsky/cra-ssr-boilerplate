import React, {Component} from 'react';

class SimpleCounter extends Component {
  render(){
    const {value, onIncrement, onDecrement} = this.props;
    return (
      <div>
        <h3>Here is a simple counter</h3>
        <p>Counter value: {value}</p>
        <button onClick={onIncrement}>
          Increment
        </button>
        <button onClick={onDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default SimpleCounter;
