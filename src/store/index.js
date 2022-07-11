import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import charactersReducer from "./characters.slice.js";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
