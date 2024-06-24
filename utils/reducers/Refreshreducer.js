import { createSlice } from "@reduxjs/toolkit";
const Refreshreducer = createSlice({
  name: "refresh",
  initialState: { ref: "" },
  reducers: {
    setRefresh: (state, action) => {
      state.ref = action.payload;
    },
  },
});
export const { setRefresh } = Refreshreducer.actions;
export default Refreshreducer.reducer;
