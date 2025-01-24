'use client'

import { CartContext } from "@/context/CartContext";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useContext } from "react";

import Product from "@/app/data";
import Image from "next/image";
import Link from "next/link";

export default function SelectedCoffee({ product }: { product: Product }) {
  const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useContext(CartContext);
  const totalItemsValue = cart.reduce((total, product) => total + (product.value * product.quantity), 0);
  const totalOrderValue = totalItemsValue + 3.50;

  return (
    <div className="w-full flex flex-col bg-card p-5 md:p-10 rounded-tr-3xl rounded-bl-3xl rounded-md">
      {cart.map((product, index) => (
        <div key={index} className="flex flex-row border-b-2 pb-6 pt-4 justify-between">
          <div className="flex gap-5">
            <Image src={product.image} alt={"Café selecionado"} width={64} height={64} priority />
            <div className="flex flex-col gap-2">
              <h3 className="text-base text-subtitle">{product.title}</h3>
              <div className="flex flex-row gap-2">
                <div className="flex gap-2 justify-center items-center p-1 rounded-md bg-button text-text">
                  <div className="bg-button p-0.5 cursor-pointer rounded-md hover:bg-hover">
                    <Minus data-cy="minus-btn" size={14} color='#7f46f7' onClick={() => decreaseQuantity(product.id)} />
                  </div>
                  <p className="text-title text-base leading-6">{product.quantity}</p>
                  <div className="bg-button p-0.5 cursor-pointer rounded-md hover:bg-hover">
                    <Plus data-cy="plus-btn" size={14} color='#7f46f7' onClick={() => increaseQuantity(product.id)} />
                  </div>
                </div>
                <button data-cy="remover-btn" type="submit" className="flex flex-row items-center gap-1 px-2 bg-button rounded-md hover:bg-hover" onClick={() => removeProduct(product.id)}>
                  <Trash size={16} color='#7f46f7' />
                  <p className="text-text text-xs hidden md:block">REMOVER</p>
                </button>
              </div>
            </div>
          </div>
          <p className="text-text font-bold">R$ <span>{product.value.toFixed(2)}</span></p>
        </div>
      ))}
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex flex-row justify-between">
          <p className="text-sm text-text">Total de itens</p>
          <p className="text-base text-text">R$ <span>{totalItemsValue.toFixed(2)}</span></p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm text-text">Entrega</p>
          <p className="text-base text-text">R$ <span>3,50</span></p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-xl font-bold text-subtitle">Total</p>
          <p className="text-xl font-bold text-subtitle">R$ <span>{totalOrderValue.toFixed(2)}</span></p>
        </div>
        <Link href="/success" type="submit" data-cy="confirmar-btn" className="flex items-center justify-center bg-yellow hover:bg-yellow-dark p-3 rounded-md">
          <p className="text-white text-sm font-bold">CONFIRMAR PEDIDO</p>
        </Link>
      </div>
    </div>
  )
}