import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollIcon: false,
};

const UI = createSlice({
  name: 'UI_SLICE',
  initialState,
  reducers: {
    notification(state, action) {},

    setScrollIcon: (state, action) => {
      state.scrollIcon = action.payload;
    },
  },
});

export const { setScrollIcon } = UI.actions;
export const UIReducer = UI.reducer;
