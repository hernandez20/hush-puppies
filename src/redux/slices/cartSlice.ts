import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "@/types/types"

interface CartItem {
  producto: Product
  cantidad: number
  talla?: number
  color?: string
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload
      const index = state.items.findIndex(
        i =>
          i.producto.id === item.producto.id &&
          i.talla === item.talla &&
          i.color === item.color
      )

      if (index !== -1) {
        state.items[index].cantidad += item.cantidad
      } else {
        state.items.push(item)
      }
    },
    removeFromCart(state, action: PayloadAction<CartItem>) {
      state.items = state.items.filter(
        i =>
          !(
            i.producto.id === action.payload.producto.id &&
            i.talla === action.payload.talla &&
            i.color === action.payload.color
          )
      )
    },
    decreaseQuantity(state, action: PayloadAction<CartItem>) {
      const index = state.items.findIndex(
        i =>
          i.producto.id === action.payload.producto.id &&
          i.talla === action.payload.talla &&
          i.color === action.payload.color
      )
      if (index !== -1) {
        if (state.items[index].cantidad > 1) {
          state.items[index].cantidad--
        } else {
          state.items.splice(index, 1)
        }
      }
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
