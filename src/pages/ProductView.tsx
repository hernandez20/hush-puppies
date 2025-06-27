import React, { useEffect, useRef, useState } from "react"
import type { RawProduct, Product } from "@/types/types"
import rawData from "../data/products.json"
import { FaHeart } from "react-icons/fa"
import ProductSlider from "@/components/ProductSlider"

import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/redux/slices/cartSlice"
import { toggleFavorite } from "@/redux/slices/favoritesSlice"
import type { RootState } from "@/redux/store"

const availableSizes = [36, 37, 38, 39, 40, 41, 42]
const colorList = [
  { colorCode: "#E2A847", colorName: "Yellow" },
  { colorCode: "#C4A484", colorName: "Brown" }
]
/** Esta info debería venir por cada producto pero al no estar disponible se queda estática  */

const mapRawToProduct = (raw: RawProduct, index: number): Product => ({
  id: `producto-${index}`,
  nombre: raw.nombre,
  precio: raw.precio,
  referencia: raw.referencia,
  foto: raw.foto,
})

const ProductView: React.FC = () => {

  const dispatch = useDispatch()
  const data: Product[] = rawData.map(mapRawToProduct)

  const [productoActual, setProductoActual] = useState<Product>(data[0])
  const [tallaSeleccionada, setTallaSeleccionada] = useState<number | null>(null)
  const tallaRef = useRef(tallaSeleccionada)

  const favoritos = useSelector((state: RootState) => state.favorites.items)
  const isFavorite = favoritos.some(p => p.id === productoActual.id)

  useEffect(() => {
    setTallaSeleccionada(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [productoActual])

  useEffect(() => {
    tallaRef.current = tallaSeleccionada
  }, [tallaSeleccionada])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <p className="font-semibold text-xs text-gray-500 uppercase"> HUSHPUPPIESCO / CALZADO / {productoActual.nombre}</p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img
            src={`img/products/${productoActual.foto}`}
            alt={productoActual.nombre}
            className="w-full h-auto"
          />
          <div className="flex mt-4 gap-2">
            {colorList.map((_, i) => (
              <img
                key={i}
                src={`img/products/${productoActual.foto}`}
                alt={`Miniatura ${i}`}
                className="w-16 h-16 object-cover border"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-4 font-semibold">

          <div className="flex flex-col">
            <h1 className="text-2xl  font-georgia">{productoActual.nombre}</h1>
            <p className="text-xl  text-[#6E434F] font-georgia">
              ${productoActual.precio.toLocaleString("en-US")}
            </p>
            <p className="text-sm  text-gray-400"> Cod. de producto zap- productoActual. {productoActual.referencia}</p>
          </div>


          <div>
            <h3 className="font-semibold text-sm">COLOR</h3>

            <div className="flex gap-2">
              {colorList.map((_, i) => (
                <img
                  key={i}
                  src={`img/products/${productoActual.foto}`}
                  alt={`Miniatura ${i}`}
                  className="w-16 h-16 object-cover border"
                />
              ))}
            </div>

          </div>

          <div>
            <h3 className="font-semibold text-sm">TALLA</h3>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map((talla) => (
                <button
                  key={talla}
                  className={`border px-4 py-2 w-[50px] h-[50px] ${tallaSeleccionada === talla
                    ? "bg-gray-200 text-gray-500"
                    : "text-gray-700 text-sm hover:bg-gray-200 bg-gray-400"
                    }`}
                  onClick={() => setTallaSeleccionada(talla)}
                >
                  {talla}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4  ">
            <button
              className=" bg-deepTuscanRed text-white px-6 py-2 disabled:opacity-50"
              disabled={tallaSeleccionada === null}
              onClick={() => {
                if (tallaRef.current !== null) {
                  dispatch(
                    addToCart({
                      producto: productoActual,
                      cantidad: 1,
                      talla: tallaRef.current,
                    })
                  )
                }
              }}
            >
              AÑADIR AL CARRITO
            </button>

            <button
              onClick={() => dispatch(toggleFavorite(productoActual))}
              className="text-gray-400 hover:text-deepTuscanRed  py-2"
              aria-label="Marcar como favorito"
            >
              <FaHeart className={isFavorite ? "text-deepTuscanRed" : "text-gray-300"} />
            </button>
          </div>

        </div>
      </div>

      <div className="mt-10 text-sm text-gray-700 font-semibold">
        <h4 className="font-bold mb-1 font-georgia ">DETALLES DEL PRODUCTO</h4>
        <hr className="border-t-2 border-gray-200 my-5" />
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin nunc augue. Aliquam feugiat lacinia ante, a hendrerit ipsum commodo id. Mauris tellus est, iaculis ac enim id, elementum pellentesque velit. Mauris commodo quam porttitor dolor eleifend, non porttitor ipsum lacinia. Duis nunc elit, tincidunt id magna a, condimentum auctor metus. In hac habitasse platea dictumst. Sed id elementum justo.
        </p>

        <h4 className="font-bold mb-1 font-georgia">TECNOLOGÍAS</h4>
        <hr className="border-t-2 border-gray-200 my-5" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin nunc augue. Aliquam feugiat lacinia ante, a hendrerit ipsum commodo id. Mauris tellus est, iaculis ac enim id, elementum pellentesque velit. Mauris commodo quam porttitor dolor eleifend, non porttitor ipsum lacinia. Duis nunc elit, tincidunt id magna a, condimentum auctor metus. In hac habitasse platea dictumst. Sed id elementum justo.
        </p>
      </div>

      <h2 className="bg-isabelline font-georgia py-1 px-1 font-semibold mt-4">COMPLETA TU LOOK</h2>
      <ProductSlider
        products={data}
        onProductClick={(prod) => {
          setProductoActual(prod)
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }, 100)
        }}
      />

      <h2 className="font-georgia font-semibold border-b py-1">PRODUCTOS RECOMENDADOS</h2>
      <ProductSlider
        products={data}
        onProductClick={(prod) => {
          setProductoActual(prod)
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }, 100)
        }}
      />
    </div>
  )
}

export default ProductView
