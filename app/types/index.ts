export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  inStock?: boolean;
  discount?: number;
  slug: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}
export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number | null;
  unit?: string | null;
  rating: number;
  reviews: number;
  picture: string;
  bgColor: string;
  tag?: string | null;
  description?: string;
  onWishlistToggle?: (id: number) => void;
  isWishlisted?: boolean;
}

export interface GiftCardProps {
  id: number;
  title: string;
  picture: string;
  bgColor: string;
  tag?: string | null;
}
