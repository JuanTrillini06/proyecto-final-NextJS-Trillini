import { ProductCard } from "./ProductCard";

import { headers } from 'next/headers';

export async function ProductList({ category }) {
  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/products/${category}`, {
    cache: 'no-store',
  });
  
  const { products } = await res.json();

  return (
    <>
      {products && products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="flex items-center justify-center mt-10">
          <h3 className="text-2xl font-bold text-center">
            No hay productos en esta categoria
          </h3>
        </div>
      )}
    </>
  );
}