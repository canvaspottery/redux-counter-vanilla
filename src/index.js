import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

const counter = createReducer(0, {
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
});

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
