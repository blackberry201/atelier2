import React from 'react';
import {increment, decrement, incrementByAmount, incrementAsync} from './overviewSlice.js';
import { connect } from 'react-redux';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incrementAmt: 5
    }
  }

  componentDidMount() {

  }

  handleIncrement = (val) => {
    this.setState({incrementAmt: val});
  }

  render() {
    console.log('PROPS:', this.props);
    return(
      <div>
        OVERVIEW
        <span>
          {this.props.counter.value}
        </span>
        <button
          aria-label="Increment value"
          onClick={() => this.props.increment()}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => this.props.decrement()}
        >
          Decrement
        </button>


        <div>
          <input
            aria-label="Set increment amount"
            value={this.state.incrementAmt}
            onChange={e => this.handleIncrement(e.target.value)}
          />
          <button
            onClick={() => this.props.incrementByAmount(Number(this.state.incrementAmt) || 0) }
          >
            Add Amount
          </button>
          <button
            onClick={() => this.props.incrementAsync(Number(this.state.incrementAmt) || 0) }
          >
            Add Async
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.overview
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (item) => dispatch(incrementByAmount(item)),
    incrementAsync: (val) => dispatch(incrementAsync(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);