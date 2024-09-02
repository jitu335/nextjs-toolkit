import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';



const makeStore = () =>
  configureStore({
    reducer: {
      // [authSlice.name]: authSlice.reducer,
      // [commentSlice.name]: commentSlice.reducer,  
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);