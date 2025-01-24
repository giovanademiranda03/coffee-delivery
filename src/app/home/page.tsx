import Coffee from '@/components/Coffee';
import { Coffee as Cafe, Package, ShoppingCart, Timer } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import CoffeeImg from '../../assets/coffee.svg';
import { DataProducts } from '../data';

export default function Home() {
  return (
    <div className="max-w-7xl w-full flex flex-col items-center justify-center px-4 py-4 ">
      <div className="flex flex-col w-full justify-center items-center mb-14 mt-4 md:flex-row ">
        <div className="flex flex-col gap-8">
          <h1 className='w-[90%] font-Baloo text-title text-3xl md:text-5xl font-bold leading-10'>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className='text-lg leading-7 text-subtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div className="flex flex-col items-start pt-6 md:flex-row md:items-center">
            <div className="flex flex-col items-start gap-4 mb-4 md:mb-0">
              <div className="flex p-2 justify-center items-center mr-4">
                <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-yellow-dark">
                  <ShoppingCart size={16} color='#faf9f9' weight="fill" />
                </div>
                <p>Compra simples e segura</p>
              </div>
              <div className="flex p-2 justify-center items-center mr-4">
                <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-yellow">
                  <Package size={16} color='#faf9f9' weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex p-2 justify-center items-center mr-4">
                <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-text">
                  <Timer size={16} color='#faf9f9' weight="fill" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div className="flex p-2 justify-center items-center mr-4">
                <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-purple">
                  <Cafe size={16} color='#faf9f9' weight="fill" />
                </div>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
        </div>
        <Image src={CoffeeImg} alt='Café' priority />
      </div>
      <div className="flex w-full">
        <h2 className='font-Baloo font-bold text-3xl text-subtitle'>Nossos cafés</h2>
      </div>
      <div data-cy="coffee-list" className="w-full justify-center grid-coffee mt-10 md:justify-between gap-9 md:gap-y-4">
        {DataProducts.map(
          (product) => <Coffee key={product.id} product={product} />
        )}
      </div>
    </div>
  )
}
