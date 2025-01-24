import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";

export default function MethodPayment() {
  return (
    <div className="flex flex-col pt-4">
      <div className="w-full flex flex-col bg-card p-5 md:p-10 rounded-lg">
        <div className="flex flex-row pb-8">
          <CurrencyDollar size={24} color='#7f46f7' />
          <div className="flex flex-col pl-2 gap-1">
            <h3 className="text-base text-subtitle">Pagamento</h3>
            <p className="text-sm text-text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <button type="submit" data-cy="credito" className="md:w-[33%] flex flex-row p-4 items-center gap-2 hover:bg-purple-light border-2 focus:bg-purple-light focus:border-purple bg-button rounded-lg">
            <CreditCard size={20} color='#7f46f7' />
            <p className="text-sm text-center text-text">CARTÃO DE CRÉDITO</p>
          </button>
          <button type="submit" data-cy="debito" className="md:w-[33%] flex flex-row p-4 gap-2 items-center justify-start hover:bg-purple-light border-2 focus:bg-purple-light focus:border-purple  bg-button rounded-lg">
            <Bank size={20} color='#7f46f7' />
            <p className="text-sm text-text">CARTÃO DE DÉBITO</p>
          </button>
          <button type="submit" data-cy="dinheiro" className="md:w-[33%] flex flex-row p-4 gap-2 items-center justify-start hover:bg-purple-light border-2 focus:bg-purple-light focus:border-purple  bg-button rounded-lg">
            <Money size={20} color='#7f46f7' />
            <p className="text-sm text-text">DINHEIRO</p>
          </button>
        </div>
      </div>
    </div>
  )
}