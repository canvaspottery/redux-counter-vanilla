import { configureStore, createAction } from "@reduxjs/toolkit";

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

function counter(state, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case increment.type:
      return state + 1;
    case decrement.type:
      return state - 1;
    default:
      return state;
  }
}

const store = configureStore({ reducer: counter });
const count = document.getElementById("count");
count.innerHTML = store.getState();

document.getElementById("increment").addEventListener("click", function () {
  store.dispatch(increment());
});

document.getElementById("decrement").addEventListener("click", function () {
  store.dispatch(decrement());
});

store.subscribe(updateView);

function updateView() {
  count.innerHTML = store.getState();
}
