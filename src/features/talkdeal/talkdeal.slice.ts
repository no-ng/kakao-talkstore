import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const fetchTalkdealMain = createAsyncThunk('api/home/tab/talkdeal/main', async () => {
  const response = await fetch('api/home/tab/talkdeal/main');
  return response.json();
});

export interface TalkdealState {
  themeKeywords?: Array<{
    themeKeyword: string;
    promotionId: number;
  }>;
}

const initialState: TalkdealState = {};

export const talkdealSlice = createSlice({
  name: 'talkdeal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTalkdealMain.fulfilled, (state, action) => {
      state.themeKeywords = action.payload.data.themeKeywords;
    });
  },
});

export { fetchTalkdealMain };

export const selectThemeKeywords = (state: RootState) => state.talkdeal.themeKeywords;

export default talkdealSlice.reducer;
