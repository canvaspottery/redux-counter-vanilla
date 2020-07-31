import { createStore } from "redux";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function counter(state, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

document.getElementById("increment").addEventListener("click", function () {
  store.dispatch(increment());
});
