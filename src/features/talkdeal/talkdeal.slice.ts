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
  specialCard?: {
    id: number;
    firstImageUrl: string;
    specialCardTitle: string;
    specialCardDescription: string;
    specialCardSlot1: string;
    specialCardSlot2: string;
    specialCardPrimaryColor: string;
    specialCardSecondaryColor: string;
    remainSeconds: number;
    specialCardCoupon: {
      value: number;
      unit: string;
      backgroundColor: string;
      displayMaxDiscountValue: boolean;
    };
  };
}

const initialState: TalkdealState = {};

export const talkdealSlice = createSlice({
  name: 'talkdeal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTalkdealMain.fulfilled, (state, action) => {
      const {
        payload: {
          data: { themeKeywords, specialCard },
        },
      } = action;

      state.themeKeywords = themeKeywords;
      state.specialCard = specialCard;
    });
  },
});

export { fetchTalkdealMain };
export const selectThemeKeywords = (state: RootState) => state.talkdeal?.themeKeywords;
export const selectSpecialCard = (state: RootState) => state.talkdeal?.specialCard;
export default talkdealSlice.reducer;
