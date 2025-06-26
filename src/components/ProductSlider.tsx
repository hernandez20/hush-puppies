import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useKeenSlider } from "keen-slider/react"
import type { Product } from "@/types/types"
import ProductCard from "@/components/ProductCard"
import type { RootState } from "@/redux/store"
import { addToCart } from "@/redux/slices/cartSlice"
import { toggleFavorite } from "@/redux/slices/favoritesSlice"

interface Props {
  products: Product[]
  onProductClick: (product: Product) => void
}

export default function ProductSlider({ products, onProductClick }: Props) {
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
      <div ref={sliderRef} className="keen-slider">
        {products.map((prod) => {
          const isFavorite = favoritos.some((f) => f.id === prod.id)

          return (
            <div key={prod.id} className="keen-slider__slide">
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
                }
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
