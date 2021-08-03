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
  return (
    <div className="Welcome">
      <Button
        variant="contained"
        color="secondary"
        className="decrement"
        onClick={decrementHandler}
      >
        Decrement
      </Button>
      <h1>{counter}</h1>
      <Button
        variant="contained"
        color="primary"
        className="increment"
        onClick={incrementHandler}
      >
        Increment
      </Button>
    </div>
  );
}

export default Welcome;
