import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FoodItem {
  id: number;
  name: string;
  image: any;
  description: string;
  price: number;
}

interface FoodState {
  items: FoodItem[];
  selectedItem?: FoodItem;
}

const initialState: FoodState = {
  items: [],
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFoodItems(state, action: PayloadAction<FoodItem[]>) {
      state.items = action.payload;
    },
    selectFoodItem(state, action: PayloadAction<FoodItem>) {
      state.selectedItem = action.payload;
    },
    clearSelectedItem(state) {
      state.selectedItem = undefined;
    },
  },
});

export const { setFoodItems, selectFoodItem, clearSelectedItem } = foodSlice.actions;
export default foodSlice.reducer;
