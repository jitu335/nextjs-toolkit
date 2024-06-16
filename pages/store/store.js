import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { authSlice } from '../blog.openreply/slices/authSlice';
import { commentSlice } from '../blog.openreply/slices/commentSlice';


const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [commentSlice.name]: commentSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);