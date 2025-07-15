import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Property } from "@/data/types";
import { getProperties } from "@/data/api";

interface PropertyState {
  properties: Property[];
  loading: boolean;
  error: string | null;
  totalCount: number;
}

const initialState: PropertyState = {
  properties: [],
  loading: false,
  error: null,
  totalCount: 0,
};

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async (params: { page?: number; limit?: number; filters?: undefined }) => {
    return await getProperties(params);
  },
);

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload.properties;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch properties";
      });
  },
});

export default propertySlice.reducer;
