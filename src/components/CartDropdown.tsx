
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { IoBag } from "react-icons/io5"
import { FaTrash } from "react-icons/fa"
import { RiSubtractFill } from "react-icons/ri"
import type { RootState } from "@/redux/store"
import { decreaseQuantity, removeFromCart } from "@/redux/slices/cartSlice"


export default function CartDropdown() {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const total = items.reduce((sum, i) => sum + i.producto.precio * i.cantidad, 0)
  const [showCart, setShowCart] = useState(false)

  return (
    <div className="relative cursor-pointer" onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)} >

      <div className="flex items-center gap-1">
        <IoBag className="text-yellow-600" />
        <span className="font-semibold">CARRITO  ({items.length})</span>
        <span className="ml-2 text-sm text-deepTuscanRed font-bold">${total.toLocaleString('en-US')}</span>
      </div>

      {showCart && items.length > 0 && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg border border-gray-200 rounded-md z-50 p-4 text-sm">
          <h4 className="font-bold">Productos en el carrito</h4>
          <ul className="max-h-60 overflow-y-auto">
            {items.map((item, index) => (
              <li key={index} className="border-b py-2 flex justify-between gap-2">
                <div className="text-xs">
                  <p className="font-medium">{item.producto.nombre}</p>
                  <p className="text-gray-500">
                    Talla: {item.talla} - Color: {item.color}
                  </p>
                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className=" px-2 py-1 rounded hover:bg-gray-300"
                    >
                      <RiSubtractFill />
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item))}
                      className="text-red-600 px-2 py-1 rounded hover:bg-red-200"
                    >
                      <FaTrash className="text-red-400" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">x{item.cantidad}</p>
                  <p className="text-xs text-gray-600">
                    ${item.producto.precio.toLocaleString("en-US")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
