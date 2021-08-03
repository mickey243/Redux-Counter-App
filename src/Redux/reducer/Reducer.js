import { createStore } from "redux";

const initialValues = {
  counter: 0,
};
const Reducer = (state = initialValues, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const Store = createStore(Reducer);
export default Store;
