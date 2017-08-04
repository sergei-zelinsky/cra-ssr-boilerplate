import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class SimpleCounter extends Component {
  componentWillMount(){
    this.props.fetchInitialValue();
  }

  render(){
    const {value, onIncrement, onDecrement} = this.props;
    return (
      <div>
        <h3>
          <FormattedMessage id="simple_counter.title"/>
        </h3>
        <p>
          <FormattedMessage id="simple_counter.current_value"/> {value}
        </p>
        <button onClick={onIncrement}>
          <FormattedMessage id="simple_counter.increment"/>
        </button>
        <button onClick={onDecrement}>
          <FormattedMessage id="simple_counter.decrement"/>
        </button>
      </div>
    );
  }
}

export default SimpleCounter;
