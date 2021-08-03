import React from "react";
import "./Welcome.css";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
function Welcome() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increseHandler = () => {
    dispatch({ type: "increse", amount: 5 });
  };
  return (
    <div className="Welcome">
      <h1 className="Welcome__output">{counter}</h1>
      <Button
        variant="contained"
        color="secondary"
        className="decrement button"
        onClick={decrementHandler}
      >
        Decrement
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="increment button"
        onClick={incrementHandler}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="increment button"
        onClick={increseHandler}
      >
        Increment By 5
      </Button>
    </div>
  );
}

export default Welcome;
