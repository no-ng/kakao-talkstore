import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MainState {
  mainBanner?: {
    firstImageUrl: string;
  };
}

const initialState: MainState = {};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    fetchMainDone(state, action: PayloadAction<MainState>) {
      state.mainBanner = action.payload.mainBanner;
    },
  },
});

export const selectMainBanner = (state: RootState) => state.main.mainBanner;
export const { fetchMainDone } = mainSlice.actions;
export default mainSlice.reducer;
