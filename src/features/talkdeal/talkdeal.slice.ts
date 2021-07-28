import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { encodeQuery } from '../../util';

const fetchTalkdealProducts = createAsyncThunk<
  { list: Talkdeal.Product[]; hasNext: boolean },
  undefined | { after?: number; size?: number }
>('api/home/tab/talkdeal/products', async (params) => {
  const response = await fetch(`api/home/tab/talkdeal/products${encodeQuery(params)}`);
  return response.json();
});

const fetchTalkdeals = createAsyncThunk<{
  main: Talkdeal.Main;
  products: { list: Talkdeal.Product[]; hasNext: boolean };
}>('fetchTalkdeals', async () => {
  const [main, products] = await Promise.all([
    fetch('api/home/tab/talkdeal/main').then((res) => res.json()),
    fetch(`api/home/tab/talkdeal/products`).then((res) => res.json()),
  ]);

  return { main, products };
});

export interface TalkdealState {
  themeKeywords?: Talkdeal.ThemeKeyword[];
  specialCard?: Talkdeal.SpecialCard;
  products?: Talkdeal.Product[];
}

const initialState: TalkdealState = {};

export const talkdealSlice = createSlice({
  name: 'talkdeal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTalkdeals.fulfilled,
      (
        state,
        {
          payload: {
            main: {
              data: { themeKeywords, specialCard },
            },
            products: { list },
          },
        },
      ) => {
        state.themeKeywords = themeKeywords;
        state.specialCard = specialCard;
        state.products = list;
      },
    );

    builder.addCase(fetchTalkdealProducts.fulfilled, (state, action) => {
      state.products = [...(state.products || []), ...action.payload.list];
    });
  },
});

export { fetchTalkdeals, fetchTalkdealProducts };
export const selectThemeKeywords = (state: RootState) => state.talkdeal?.themeKeywords;
export const selectSpecialCard = (state: RootState) => state.talkdeal?.specialCard;
export default talkdealSlice.reducer;
