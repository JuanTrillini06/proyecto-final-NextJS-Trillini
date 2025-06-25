import { ProductList } from "../components/ProductList";
import Link from "next/link";
import { Suspense } from "react";
import { Spinner } from "@/components/Spinner/Spinner";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata({ params, searchParams }, parent) {
  const { category } = await params;
  return {
    title: `Products of ${category}`,
    description: `Products of ${category} category`,
    keywords: ["products", "categories", category],
  };
}

export function generateStaticParams() {
  return [
    { category: "adulto" },
    { category: "ninio" },
    { category: "adolescente" },
  ];
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  return (
    <div className="flex flex-col items-center justify-center mt-10">
            <div className="flex flex-wrap justify-center mt-4">
        <Link
          className="bg-indigo-400 text-gray-800 px-4 py-2 rounded m-2 hover:bg-blue-900 hover:text-white"
          href={"/products/all"}
        >
          Todos
        </Link>
        <Link
          className="bg-indigo-400 text-gray-800 px-4 py-2 rounded m-2 hover:bg-blue-900 hover:text-white"
          href={"/products/adulto"}
        >
          Adulto
        </Link>
        <Link
          className="bg-indigo-400 text-gray-800 px-4 py-2 rounded m-2 hover:bg-blue-900 hover:text-white"
          href={"/products/adolescente"}
        >
          Adolescente
        </Link>
        <Link
          className="bg-indigo-400 text-gray-800 px-4 py-2 rounded m-2 hover:bg-blue-900 hover:text-white"
          href={"/products/ninio"}
        >
          Niños
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<Spinner />}>
          <ProductList category={category} />
        </Suspense>
      </div>
    </div>
  );
}