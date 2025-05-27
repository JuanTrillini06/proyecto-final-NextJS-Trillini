"use client";

import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-4 text-lg max-w-lg">Sector administrador</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-900 hover:bg-indigo-400 text-gray-200 hover:text-gray-800 rounded"
          onClick={() => router.back()}
        >
          Volver
        </button>
      </div>
    </>
  );
}