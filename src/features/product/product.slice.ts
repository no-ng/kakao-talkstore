import { createEntityAdapter, createSlice, EntityState } from '@reduxjs/toolkit';

const productAdapter = createEntityAdapter<Product.Data>({
  selectId: (product) => product.id,
});

export interface ProductState {
  products: EntityState<Product.Data>;
}

const initialState: ProductState = {
  products: productAdapter.getInitialState({
    loading: 'idle',
  }),
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productAdded: (state, action) => {
      state.products = productAdapter.addOne(state.products, action.payload);
    },
  },
});

const { selectById } = productAdapter.getSelectors();
export const selectProductById = (state: ProductState, id: string) =>
  selectById(state.products, id);
export default productSlice.reducer;
