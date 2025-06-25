import { ProductCard } from "./ProductCard";

export async function ProductList({ category }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${category}`, {
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