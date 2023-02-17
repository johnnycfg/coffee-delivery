import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Product } from '../pages/Home'
import { api } from '../services/api'

interface CartItem {
  id: string
  amount: number
}

interface CartContextType {
  cart: CartItem[]
  addProductToCart: ({ id, amount }: CartItem) => void
  updateProductAmountInTheCart: ({ id, amount }: CartItem) => void
  removeProductFromCart: (id: string) => void
  clearCartAfterOrder: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    } else {
      return []
    }
  })

  async function addProductToCart({ id, amount }: CartItem) {
    const product = await api
      .get<Product>(`/products/${id}`)
      .then((res) => res.data)

    const newCartItem = {
      id,
      amount,
    }

    const productInTheCart = cart.find((cartItem) => cartItem.id === id)

    if (!productInTheCart) {
      setCart((state) => [...state, newCartItem])
      return
    }

    if (
      productInTheCart &&
      productInTheCart.amount + amount > product.availableAmount
    ) {
      return toast(
        'A quantidade selecionada junto a quantidade que já está no carrinho é maior que a disponível.',
        { toastId: 'out-of-stock', position: 'top-right', type: 'error' },
      )
    }

    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: cartItem.amount + amount }
      }

      return cartItem
    })

    setCart(newCart)

    toast.success('Produto adicionado ao carrinho.')
  }

  function removeProductFromCart(id: string) {
    const newCart = cart.filter((cartItem) => cartItem.id !== id)

    setCart(newCart)
    toast('Produto removido do carrinho.', {
      toastId: 'removed-from-cart',
      position: 'top-right',
      type: 'success',
    })
  }

  async function updateProductAmountInTheCart({ id, amount }: CartItem) {
    if (!id) return

    const product = await api
      .get<Product>(`/products/${id}`)
      .then((res) => res.data)

    if (amount > product.availableAmount) {
      return toast('A quantidade selecionada é maior que a disponível.', {
        toastId: 'out-of-stock',
        position: 'top-right',
        type: 'error',
      })
    }

    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount }
      }

      return cartItem
    })

    setCart(newCart)
  }

  function clearCartAfterOrder() {
    setCart([])
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        updateProductAmountInTheCart,
        clearCartAfterOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
