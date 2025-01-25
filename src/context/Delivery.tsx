"use client";

import { createContext, useContext, useState } from "react";

interface DeliveryData {
  endereco: {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    uf: string;
    numero: string;
    complemento: string;
  };
  metodoPagamento: string;
}

interface DeliveryContextProps {
  deliveryData: DeliveryData;
  setDeliveryData: (data: Partial<DeliveryData>) => void;
}

const DeliveryContext = createContext<DeliveryContextProps | undefined>(
  undefined
);

export const DeliveryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [deliveryData, setDeliveryDataState] = useState<DeliveryData>({
    endereco: {
      cep: "",
      rua: "",
      bairro: "",
      cidade: "",
      uf: "",
      numero: "",
      complemento: "",
    },
    metodoPagamento: "",
  });

  const setDeliveryData = (data: Partial<DeliveryData>) => {
    setDeliveryDataState((prev) => ({ ...prev, ...data }));
  };

  return (
    <DeliveryContext.Provider value={{ deliveryData, setDeliveryData }}>
      {children}
    </DeliveryContext.Provider>
  );
};

export const useDeliveryContext = () => {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error(
      "useDeliveryContext must be used within a DeliveryProvider"
    );
  }
  return context;
};
