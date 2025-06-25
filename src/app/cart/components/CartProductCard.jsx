'use client';

import Image from "next/image";
import { useCartContext } from "@/context/CartContext";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export function CartProductCard({ item }) {
  const { decreaseQuantity, addToCart, removeFromCart } = useCartContext();

  return (
    <div className="bg-indigo-400 text-gray-900 rounded-lg p-6 max-w-lg w-full flex flex-col items-center mb-6">
      <Image
        alt={item.name}
        src={item.imageUrl}
        width={250}
        height={250}
        className="rounded-lg"
      />

      <div className="flex flex-col items-center gap-2 mt-4">
        <h3 className="text-xl font-bold text-center">{item.name}</h3>
        <p className="text-lg font-semibold">${item.price*item.quantity}</p>
        <span className="text-sm text-gray-800">
          Cantidad: {item.quantity}
        </span>

        <div className="flex gap-2 mt-2">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-400"
          >
            −
          </button>
          <button
            onClick={() => addToCart(item)}
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-400"
          >
            +
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}