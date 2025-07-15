import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./slices/propertySlice";
import filterReducer from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
