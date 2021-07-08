import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const fetchMain = createAsyncThunk('api/main', async () => {
  const response = await fetch('api/main');
  return response.json();
});

export interface MainState {
  themeKeywords?: Array<{
    themeKeyword: string;
    promotionId: number;
  }>;
}

const initialState: MainState = {};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMain.fulfilled, (state, action) => {
      state.themeKeywords = action.payload.data.themeKeywords;
    });
  },
});

export { fetchMain };

export const selectThemeKeywords = (state: RootState) => state.main.themeKeywords;

export default mainSlice.reducer;
