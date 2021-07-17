import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const fetchBrandTab = createAsyncThunk('api/home/tab/brand/main', async () => {
  const response = await fetch('api/home/tab/brand/main');
  return response.json();
});

interface Brand {
  id: number;
  brandStore: {
    id: number;
    profileImage: string;
    storeName: string;
  };
  mainImageUrl: string;
  subImageUrl: string;
  remainSeconds: number;
}

interface BrandState {
  loaded: boolean;
  list: Brand[];
}

const initialState: BrandState = {
  loaded: false,
  list: [],
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrandTab.pending, (state) => {
      state.loaded = false;
    });

    builder.addCase(fetchBrandTab.fulfilled, (state, { payload }) => {
      state.list = payload.data.contents;
      state.loaded = true;
    });
  },
});

const selectSelf = ({ brand }: RootState) => brand;
const selectBrands = createSelector(selectSelf, (state) => state.list);
const selectBrandLoaded = createSelector(selectSelf, (state) => state.loaded);

export { fetchBrandTab, selectBrands, selectBrandLoaded };
export default brandSlice.reducer;
