import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  type: string;
  city: string;
  minPrice: number | "";
  maxPrice: number | "";
  roomCount: string;
  listingType: string;
}

const initialState: FilterState = {
  type: "",
  city: "",
  minPrice: "",
  maxPrice: "",
  roomCount: "",
  listingType: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ key: keyof FilterState; value: any }>,
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
