"use client";

import Image from "next/image";
import { useState } from "react";
import { Navlink } from "./navlink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCartContext } from "../../context/CartContext";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export function Navbar() {
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/about" },
    { name: "Productos", href: "/products/all" },
    { name: "Contacto", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCartContext();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white border-gray-200 dark:bg-indigo-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/favicon.ico" height={20} width={50} alt="Ecommerce Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Juandrobe
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-gray-800 dark:hover:bg-indigo-400 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${!isOpen && "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-indigo-400 md:dark:bg-indigo-400 dark:border-gray-700">
            {links.map(({ name, href }) => (
              <Navlink name={name} href={href} key={name} />
            ))}
            <li className="relative w-full">
              <Link href="/cart" className="relative block w-fit">
                <Image alt="cart" src="/cart-3-svgrepo-com.svg" width={50} height={20} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
                      {totalItems}
                    </span>
                  )}
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}