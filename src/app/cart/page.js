'use client';

import { useCartContext } from "@/context/CartContext";
import { CartProductCard } from "@/app/cart/components/CartProductCard";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";



export default function CartPage() {
  const { cart, clearCart } = useCartContext();

  const handlePurchase = async () => {
  const mod = await import('../../utils/ClientToast');
  mod.showSuccessToast('¡Compra realizada con éxito!');
  clearCart();
};

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Resumen del Carrito</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartProductCard key={item.id} item={item} />
          ))}
          <button
            onClick={handlePurchase}
            className="mt-4 px-6 py-2 bg-blue-900 text-white hover:bg-green-300 hover:text-green-500 rounded"
          >
            Comprar
          </button>
        </>
      )}
    </div>
  );
}