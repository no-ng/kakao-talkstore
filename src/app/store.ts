import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import mainReducer from '../features/main/main.slice';
import talkdealReducer from '../features/talkdeal/talkdeal.slice';
import brandReducer from '../features/brand/brand.slice';

const reducer = {
  main: mainReducer,
  talkdeal: talkdealReducer,
  brand: brandReducer,
};

export type RootState = StateFromReducersMapObject<typeof reducer>;

export function initStore(preloadedState?: RootState) {
  return configureStore({
    reducer,
    preloadedState,
  });
}

type Store = ReturnType<typeof initStore>;

export type AppDispatch = Store['dispatch'];
