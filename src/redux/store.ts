import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice"
import favoritesReducer from "./slices/favoritesSlice" 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
