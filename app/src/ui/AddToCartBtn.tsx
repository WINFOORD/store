'use client'

import { useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'
import { Locale } from '../i18n'

type Props = {
  product: {
    id: string
    name: string
    price: number
    inStock: boolean
  }
  locale: Locale
  dict: Dictionary
}

export default function AddToCartButton({ product, locale, dict }: Props) {
  const [isAdding, setIsAdding] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = async () => {
    if (!product.inStock || isAdding) return

    setIsAdding(true)
    
    try {
      // API call برای افزودن به سبد
      await fetch('/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          quantity,
          locale,
        }),
      })

      setIsAdded(true)
      
      // پس از 2 ثانیه حالت را ریست کن
      setTimeout(() => {
        setIsAdded(false)
      }, 2000)
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* انتخاب تعداد */}
      <div className="flex items-center gap-4">
        <label className="font-medium">{dict.product.quantity}:</label>
        <div className="flex items-center border rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 hover:bg-gray-100 transition-colors"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-6 py-2 border-x">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 hover:bg-gray-100 transition-colors"
            disabled={!product.inStock}
          >
            +
          </button>
        </div>
      </div>

      {/* دکمه افزودن به سبد */}
      <div className="flex gap-3">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || isAdding}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            isAdded
              ? 'bg-green-500 text-white'
              : product.inStock
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5" />
              {locale === 'fa' ? 'اضافه شد' : locale === 'en' ? 'Added' : 'تمت الإضافة'}
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              {isAdding ? dict.common.loading : dict.product.addToCart}
            </>
          )}
        </button>

        <button
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
          disabled={!product.inStock}
        >
          {dict.product.buyNow}
        </button>
      </div>
    </div>
  )
}