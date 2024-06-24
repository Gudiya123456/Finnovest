import { configureStore } from "@reduxjs/toolkit";
import refresh from "./reducers/Refreshreducer";
const store = configureStore({
  reducer: {
    ref: refresh,
  },
});
export default store;
