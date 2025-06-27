export interface RawProduct {
  nombre: string
  precio: number
  referencia: string
  foto: string
}
export interface Product {
  id: string
  nombre: string
  precio: number
  referencia: string
  foto: string
}
export interface InputFieldProps {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  type?: "text" | "email";
  buttonText?: string;
  icon?: React.ReactNode;
}

export interface ProductCardProps {
  producto: Product
  isFavorite?: boolean
  onAddToCart?: () => void
  onToggleFavorite?: () => void
  onClick?: () => void
}

export interface ProductSliderProps {
  products: Product[]
  onProductClick: (product: Product) => void
}

export interface FavoritesState {
  items: Product[]
}


export interface CartItem {
  producto: Product
  cantidad: number
  talla?: number
  color?: string
}

export interface CartState {
  items: CartItem[]
}