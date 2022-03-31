import { configureStore } from "@reduxjs/toolkit";

import todos from "./todo-slice";

const store = configureStore({
  reducer: {
    todo: todos.reducer,
  },
});
export default store;