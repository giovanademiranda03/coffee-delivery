'use client'

import useStateLocal from '@/app/hooks/useStateLocal';
import { ReactNode, createContext } from 'react';
import Product, { getProductById } from '../../app/data';

export interface CartProduct extends Product {
  id: number;
  quantity: number;
}

export interface CartContextData {
  cart: CartProduct[],
  addProduct: (id: number, quantity: number) => void,
  removeProduct: (id: number) => void,
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useStateLocal();

  const addProduct = (id: number, quantity: number) => {
    setCart((currentCart) => {
      const productExists = currentCart.find((product) => product.id === id);
      if (productExists) {
        return currentCart.map((product) =>
          product.id === id ? { ...product, quantity: product.quantity + quantity } : product
        );
      } else {
        const newProduct = getProductById(id);
        if (newProduct) {
          return [...currentCart, { ...newProduct, quantity }];
        }
        return currentCart;
      }
    });
  };


  const removeProduct = (id: number) => {
    setCart((currentCart) => currentCart.filter((product) => product.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
