import {connect} from 'react-redux';
import SimpleCounter from 'components/SimpleCounter';
import {increment, decrement} from 'actions/simple-counter';

function mapStateToSimpleCounterProps(state){
  return {
    value: state.simpleCounter
  }
}

function mapDispatchToSimpleCounterProps(dispatch){
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

export default connect(
  mapStateToSimpleCounterProps,
  mapDispatchToSimpleCounterProps
)(SimpleCounter);
