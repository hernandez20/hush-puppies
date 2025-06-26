import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "@/types/types"

interface FavoritesState {
  items: Product[]
}
const initialState: FavoritesState = {
  items: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Product>) {
      const exists = state.items.find(p => p.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter(p => p.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
    },
    clearFavorites(state) {
      state.items = []
    },
  },
})

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
