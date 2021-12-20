import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseCounter } from "../../../stores/actions/counter";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  // const increaseCounter = () => {
  //   // setCount(count + 1);
  //   console.log("HAI");
  // };
  return (
    <Container className="text-center">
      <h2>Counter App</h2>
      <h3>{props.counter.count}</h3>
      <Button variant="primary">-</Button>
      <Button variant="secondary" className="mx-2">
        RESET
      </Button>
      <Button variant="primary" onClick={() => props.increaseCounter(2)}>
        +
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increaseCounter
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
