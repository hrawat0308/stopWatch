import { configureStore, createSlice } from "@reduxjs/toolkit";

const stopWatchSlice = createSlice({
  name: "stopWatch",
  initialState: { time: null, interval: 0 },
  reducers: {
    start(state, action) {
      state.time++;
    },
    stop(state, action) {},
    reset(state, action) {
      state.time = null;
    },
    resetInterval(state, action) {
      state.interval = 0;
    },
    setIntervalId(state, action) {
      state.interval = action.payload.id;
    }
  }
});

const Store = configureStore({
  reducer: {
    stopWatch: stopWatchSlice.reducer
  }
});

export default Store;
export const stopWatchActions = stopWatchSlice.actions;