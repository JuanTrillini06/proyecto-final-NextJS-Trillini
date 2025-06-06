"use client";

import { useCartContext } from "@/context/CartContext";
import Link from "next/link";
import { showToast } from "nextjs-toast-notify";

export function DetailCard({ product }) {
  const { addToCart } = useCartContext();

  const handleAdd = () => {
    addToCart(product);

    showToast.success("¡Producto agregado con exito!", {
      duration: 2500,
      progress: false,
      position: "top-right",
      transition: "bounceIn",
      icon: '',
      sound: true,
  });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <div className="bg-indigo-400 text-gray-900 rounded-lg p-10 max-w-lg flex flex-col items-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg mb-5"
        />

        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-2xl font-bold text-center">{product.name}</h3>

          <p className="text-lg text-center">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>
          <span className="text-sm text-gray-800 mt-2">
            Categoria: {product.category}
          </span>

          <button
            onClick={handleAdd}
            className="mt-4 px-4 py-2 bg-blue-900 text-white hover:bg-green-300 hover:text-green-500 rounded"
          >
            Comprar
          </button>
        </div>
      </div>

      <Link
        href="/products/all"
        className="mt-4 px-4 py-2 bg-blue-900 text-white hover:bg-red-300 hover:text-red-500 rounded"
      >
        Regresar a la página de productos
      </Link>
    </div>
  );
}