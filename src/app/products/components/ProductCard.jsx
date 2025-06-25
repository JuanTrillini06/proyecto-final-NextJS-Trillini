import Link from "next/link";
import Image from "next/image";

export function ProductCard({ product }) {
  return (
    <div className="bg-indigo-400 text-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center">
      <h4 className="text-xl font-semibold mt-2">{product.name}</h4>

      <Image alt="cart" src={product.imageUrl} width={300} height={300} className="mt-2 rounded-lg" />

      <p className="text-lg font-bold mt-2">${product.price}</p>

      <span className="text-sm text-gray-600 mt-2">
        Category: {product.category}
      </span>

      <Link
        className="mt-4 px-4 py-2 bg-blue-900 text-white rounded"
        href={`/products/details/${product.slug}`}
      >
        Ver detalles
      </Link>
    </div>
  );
}