import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

const store = configureStore({ reducer: counterSlice.reducer });
const count = document.getElementById("count");
count.innerHTML = store.getState();

document.getElementById("increment").addEventListener("click", function () {
  store.dispatch(counterSlice.actions.increment());
});

document.getElementById("decrement").addEventListener("click", function () {
  store.dispatch(counterSlice.actions.decrement());
});

store.subscribe(updateView);

function updateView() {
  count.innerHTML = store.getState();
}
