"use client";

import logo from "@/assets/logo.svg";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { useState, useEffect } from "react";

export default function Header() {
  const [location, setLocation] = useState<string>("Sorocaba-SP");
  const [loadingLocation, setLoadingLocation] = useState<boolean>(false);

  useEffect(() => {
    const fetchLocation = () => {
      if (!navigator.geolocation) {
        alert("Geolocalização não é suportada no seu navegador.");
        return;
      }

      setLoadingLocation(true);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();

            if (data && data.address) {
              const city =
                data.address.city || data.address.town || data.address.village;
              const state = data.address.state;

              if (city && state) {
                setLocation(`${city}-${state}`);
              } else {
                setLocation("Localização desconhecida");
              }
            }
          } catch (error) {
            console.error("Erro ao buscar localização:", error);
            setLocation("Erro ao buscar localização");
          }
          setLoadingLocation(false);
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
          setLoadingLocation(false);
          setLocation("Erro ao obter localização");
        }
      );
    };

    fetchLocation();
  }, []);

  return (
    <header className="w-full flex max-w-7xl justify-between items-center p-5">
      <div className="flex">
        <Link data-cy="logo" href="/">
          <Image src={logo} alt="Logotipo" priority />
        </Link>
      </div>
      <nav className="flex items-center text-center">
        <div className="flex p-2 justify-center items-center gap-1 m-2 rounded-md bg-purple-light">
          <MapPin size={24} color="#8047F8" weight="fill" />
          <p className="text-sm text-center text-purple-dark leading-6">
            {loadingLocation ? "Carregando..." : location}
          </p>
        </div>
        <Cart />
      </nav>
    </header>
  );
}
