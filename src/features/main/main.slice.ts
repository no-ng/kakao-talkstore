import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const fetchMain = createAsyncThunk('api/main', async () => {
  const response = await fetch('api/main');
  return response.json();
});

export interface MainState {
  mainBanner?: {
    firstImageUrl: string;
  };
}

const initialState: MainState = {};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMain.fulfilled, (state, action) => {
      state.mainBanner = action.payload.data.mainBanner;
    });
  },
});

export { fetchMain };

export const selectMainBanner = (state: RootState) => state.main.mainBanner;

export default mainSlice.reducer;
