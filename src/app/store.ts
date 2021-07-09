import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../features/main/main.slice';
import talkdealReducer from '../features/talkdeal/talkdeal.slice';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    talkdeal: talkdealReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
