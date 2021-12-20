import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseCounter } from "../../../stores/actions/counter";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 5
    };
  }

<<<<<<< HEAD
  componentDidMount() {}
=======
  componentDidMount() {
    console.log("COMPONENT DIDMOUNT BERJALAN");
    console.log(this.props.counter);
  }
>>>>>>> 491cf2c3e90cbf476e7cd7e4ffde2dddbe4afae8

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decraseCounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  resetCounter = () => {
    this.setState({
      count: 0
    });
  };
  render() {
    const { count } = this.props.counter;
    return (
      <Container className="text-center">
        <h2>Counter App</h2>
        <h3>{count}</h3>
        <Button variant="primary" onClick={this.decraseCounter}>
          -
        </Button>
        <Button variant="secondary" onClick={this.resetCounter} className="mx-2">
          RESET
        </Button>
        <Button variant="primary" onClick={() => props.increaseCounter(2)}>
          +
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = {
  increaseCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
