"use client";

import { useDeliveryContext } from "@/context/Delivery";
import { MapPinLine } from "@phosphor-icons/react";
import cepBrasil from "cep-promise";
import React, { ChangeEvent, useState } from "react";
import MaskedInput from "react-text-mask";

export default function FormPayment() {
  const { deliveryData, setDeliveryData } = useDeliveryContext();
  const [cep, setCEP] = useState("");

  const handleCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCEP(e.target.value);
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryData({
      endereco: {
        ...deliveryData.endereco,
        [name]: value,
      },
    });
  };

  const searchCEP = async () => {
    if (cep.replace(/\D+/g, "").length !== 8) return;
    try {
      const res = await cepBrasil(cep.replace("-", ""));
      if (res) {
        setDeliveryData({
          endereco: {
            ...deliveryData.endereco,
            cep,
            rua: res.street,
            bairro: res.neighborhood,
            cidade: res.city,
            uf: res.state,
          },
        });
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  return (
    <div className="w-full flex flex-col bg-card p-5 md:p-10 rounded-lg">
      <div className="flex flex-row pb-8">
        <MapPinLine size={24} color="#c47e16" />
        <div className="flex flex-col pl-2 gap-1">
          <h3 className="text-base text-subtitle">Endereço de Entrega</h3>
          <p className="text-sm text-text">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <MaskedInput
          name="cep"
          className="md:w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
          data-cy="cep"
          placeholder="CEP"
          value={cep}
          onChange={handleCEP}
          onBlur={searchCEP}
          required
        />
        <input
          name="rua"
          className="p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
          data-cy="rua"
          placeholder="RUA"
          value={deliveryData.endereco.rua}
          onChange={handleAddressChange}
          required
        />
        <div className="flex flex-col md:flex-row gap-3">
          <input
            name="numero"
            className="md:w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            type="number"
            data-cy="numero"
            value={deliveryData.endereco.numero || ""}
            onChange={handleAddressChange}
            placeholder="Número"
            required
          />
          <input
            name="complemento"
            className="md:w-[60%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            data-cy="complemento"
            placeholder="Complemento"
            value={deliveryData.endereco.complemento || ""}
            onChange={handleAddressChange}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            name="bairro"
            className="md:w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            data-cy="bairro"
            placeholder="Bairro"
            value={deliveryData.endereco.bairro}
            onChange={handleAddressChange}
            required
          />
          <input
            name="cidade"
            className="md:w-[50%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            data-cy="cidade"
            placeholder="Cidade"
            value={deliveryData.endereco.cidade}
            onChange={handleAddressChange}
            required
          />
          <input
            name="uf"
            className="md:w-[10%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            data-cy="uf"
            placeholder="UF"
            value={deliveryData.endereco.uf}
            onChange={handleAddressChange}
            required
          />
        </div>
      </form>
    </div>
  );
}
