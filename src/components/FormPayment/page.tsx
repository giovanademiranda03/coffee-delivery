'use client'

import { MapPinLine } from "@phosphor-icons/react";
import cepBrasil from 'cep-promise';
import React, { ChangeEvent, useState } from "react";
import MaskedInput from 'react-text-mask';

export default function FormPayment() {
  const [cep, setCEP] = useState('');
  const [endereco, setEndereco] = useState({
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    uf: ''
  });

  const handleCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 9)
      setCEP(e.target.value);
  }

  const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndereco({
      ...endereco,
      [e.target.name]: e.target.value
    });
  };


  const searchCEP = async () => {
    if (cep.replace(/\D+/g, '').length !== 8) return;
    try {
      const cepPesquisa = cep.replace('-', '');
      const res = await cepBrasil(cepPesquisa);
      if (res) {
        setEndereco({
          ...endereco,
          cep,
          rua: res.street,
          bairro: res.neighborhood,
          cidade: res.city,
          uf: res.state
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full flex flex-col bg-card p-5 md:p-10 rounded-lg">
      <div className="flex flex-row pb-8">
        <MapPinLine size={24} color='#c47e16' />
        <div className="flex flex-col pl-2 gap-1">
          <h3 className="text-base text-subtitle">Endereço de Entrega</h3>
          <p className="text-sm text-text">Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <MaskedInput
          className="md:w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
          data-cy="cep"
          placeholder="CEP"
          value={cep}
          onChange={handleCEP}
          onBlur={searchCEP}
          required
        />
        <input
          className="p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
          data-cy="rua"
          placeholder="RUA"
          value={endereco.rua}
          onChange={handleEnderecoChange}
          required
        />
        <div className="flex flex-col md:flex-row gap-3">
          <input className="md:w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            type="number"
            data-cy="numero"
            placeholder="Número"
            required
          />
          <input className="md:w-[60%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            data-cy="complemento"
            placeholder="Complemento"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <input className="md:w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            data-cy="bairro"
            placeholder="Bairro"
            value={endereco.bairro}
            onChange={handleEnderecoChange}
            required
          />
          <input
            className="md:w-[50%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            data-cy="cidade"
            placeholder="Cidade"
            value={endereco.cidade}
            onChange={handleEnderecoChange}
            required
          />
          <input
            className="md:w-[10%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple"
            data-cy="uf"
            placeholder="UF"
            value={endereco.uf}
            onChange={handleEnderecoChange}
            required
          />
        </div>
      </form>
    </div>
  )
}