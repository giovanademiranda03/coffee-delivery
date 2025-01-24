'use client'

import { CartContext } from "@/context/CartContext";
import { ShoppingCart } from "@phosphor-icons/react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (cart) {
      setTotalItems(cart.reduce((total, product) => total + product.quantity, 0));
    }
  }, [cart]);

  return (
    <Link data-cy="cart" href="/checkout" className="flex relative p-2 justify-center items-center gap-1 m-2 rounded-md bg-yellow-light">
      <ShoppingCart size={24} color="#C47F17" weight="fill" />
      {totalItems > 0 && (
        <p className='absolute flex justify-center items-center -top-2 -right-2 w-5 h-5 text-center text-white rounded-full bg-yellow-dark text-sm'>{totalItems}</p>
      )}
    </Link>
  )
}