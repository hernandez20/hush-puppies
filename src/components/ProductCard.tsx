import { FaHeart } from "react-icons/fa"
import type { ProductCardProps } from "@/types/types"

export default function ProductCard({ producto, isFavorite, onAddToCart, onToggleFavorite, onClick}: ProductCardProps) {

  const imgSrc = `img/products/${producto.foto}`

  return (
    <div className="relative flex flex-col items-center cursor-pointer p-4 bg-white hover:shadow-lg rounded transition" onClick={onClick}>
      <button className="absolute top-2 right-2 z-10" onClick={(e) => { e.stopPropagation(); onToggleFavorite?.() }} aria-label="Favorito">
        <FaHeart className={`text-sm ${isFavorite ? "text-deepTuscanRed" : "text-gray-300"}`} />
      </button>

      <img className="w-40 h-32 object-contain mb-2" src={imgSrc} alt={producto.nombre} />

      <div className="flex gap-2 mb-2">
        {[1, 2, 3].map((i) => (
          <img key={i} src={imgSrc} alt={`${producto.nombre} mini ${i}`} className="w-10 h-10 object-contain border"/>
        ))}
      </div>

      <p className="text-sm text-center font-semibold">{producto.nombre}</p>
      <p className="text-deepTuscanRed font-semibold text-center">
        ${producto.precio.toLocaleString("en-US")}
      </p>

      <button className="mt-3 px-4 py-2 bg-deepTuscanRed text-white text-sm w-full" onClick={(e) => { e.stopPropagation(); onAddToCart?.()}}>
        AGREGAR AL CARRITO
      </button>
    </div>
  )
}


