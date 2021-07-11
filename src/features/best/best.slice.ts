import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const fetchBestTab = createAsyncThunk('api/home/tab/best/main', async () => {
  const response = await fetch('api/home/tab/best/main');

  return response.json();
});

interface Product {
  deliveryFeeType: 'CONDITIONAL_FREE' | 'FREE' | 'PAID' | 'QUANTITY_PAID';
  discountPrice: number;
  discountRate: number;
  discountedPrice: number;
  freeDelivery: boolean;
  linkPath: string;
  plusFriendSubscriberExclusive: boolean;
  productId: number;
  productImage: string;
  productName: string;
  groupDiscountDisplayable?: boolean;
  groupDiscountUserCount?: number;
  groupDiscountedPrice?: number;
  hasAdditionalOptionPrice?: boolean;
}

interface BestState {
  eventBanners?: {
    firstImageUrl: string;
    id: number;
    landingUrl: string;
    name: string;
    productName: string;
  }[];
  recommendProducts: {
    views: { categoryId: string; categoryName: string; products: Product[] }[];
  };
}

const initialState: BestState = {
  recommendProducts: { views: [] },
};

export const bestSlice = createSlice({
  name: 'best',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBestTab.fulfilled, (state, { payload }) => {
      state.recommendProducts = payload.data.recommendProducts;
      state.eventBanners = payload.data.eventBanners;
    });
  },
});

export const selectRecommendProducts = ({ best }: RootState) => best.recommendProducts;
export const selectRecommendCategories = ({ best }: RootState) =>
  best.recommendProducts?.views.map((view) => view.categoryName);

export default bestSlice.reducer;
