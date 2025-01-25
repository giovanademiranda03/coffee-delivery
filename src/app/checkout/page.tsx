"use client";

import FormPayment from "@/components/FormPayment";
import MethodPayment from "@/components/MethodPayment";
import SelectedCoffee from "@/components/SelectedCoffee";
import { useContext } from "react";
import { CartContext } from "@/context/Cart";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  return (
    <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between p-4">
      <div className="flex flex-col w-full md:w-[60%]">
        <h2 className="font-Baloo font-bold text-lg text-subtitle mb-4">
          Complete seu pedido
        </h2>
        <FormPayment />
        <MethodPayment />
      </div>

      <div className="flex flex-col w-full md:w-[40%]">
        <div className="flex flex-col pb-4 md:px-4">
          <h2 className="font-Baloo font-bold text-lg text-subtitle mb-4">
            Cafés selecionados
          </h2>
          <SelectedCoffee product={cart} />
        </div>
      </div>
    </div>
  );
}
