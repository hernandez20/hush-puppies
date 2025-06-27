import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useKeenSlider } from "keen-slider/react"
import ProductCard from "@/components/ProductCard"
import type { RootState } from "@/redux/store"
import { addToCart } from "@/redux/slices/cartSlice"
import { toggleFavorite } from "@/redux/slices/favoritesSlice"

import type { ProductSliderProps } from "@/types/types"

export default function ProductSlider({ products, onProductClick }: ProductSliderProps) {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 2.2, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 25 },
      },
    },
  })

  useEffect(() => {
    instanceRef.current?.update()
  }, [products])

  return (
    <section className="mt-12">
      <div className="keen-slider" ref={sliderRef} >
        {products.map((prod) => { const isFavorite = favoritos.some((f) => f.id === prod.id)

          return (
            <div className="keen-slider__slide" key={prod.id} >
              <ProductCard
                producto={prod}
                isFavorite={isFavorite}
                onClick={() => onProductClick(prod)}
                onToggleFavorite={() => dispatch(toggleFavorite(prod))}
                onAddToCart={() =>
                  dispatch(addToCart({
                    producto: prod,
                    cantidad: 1,
                    talla: 38, 
                    color: "Brown" 
                  }))
                }/>
            </div>
          )
        })}
      </div>
    </section>
  )
}
