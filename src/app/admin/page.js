import Link from "next/link";
import { ProductsTable } from "./components/ProductsTable";
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const product = await fetch(`http://${process.env.VERCEL_URL}/api/products/all`, {
    cache: 'no-store',}).then(
    (res) => res.json()
  );
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center">
        <p className="mt-4 text-lg max-w-lg">Admin Section</p>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          href="/admin/create"
        >
          Create New Product
        </Link>

        <ProductsTable products={products} />
      </div>
    </>
  );
}
