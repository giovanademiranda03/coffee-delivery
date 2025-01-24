import logo from '@/assets/logo.svg';
import { MapPin } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import Cart from '../Cart/page';

export default function Header() {
  return (
    <header className="w-full flex max-w-7xl justify-between items-center p-5">
      <div className="flex">
        <Link data-cy="logo" href="/home">
          <Image src={logo} alt="Logotipo" priority />
        </Link>
      </div>
      <nav className="flex items-center text-center">
        <div className="flex p-2 justify-center items-center gap-1 m-2 rounded-md bg-purple-light">
          <MapPin size={24} color="#8047F8" weight="fill" />
          <p className='text-sm text-center text-purple-dark leading-6'>Sorocaba-SP</p>
        </div>
        <Cart />
      </nav>
    </header>
  )
}