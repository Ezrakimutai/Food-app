
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import foodReducer from './slices/foodSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    food: foodReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
