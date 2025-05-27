 import { Navbar } from "@/components/Navbar/navbar"

export function generateMetadata({ params, searchParams }, parent) {
  const data = {
    title: "Juandrobe",
    description: "E-Commerce App",
    domain: "https://ecommerce.com",
    keywords: [
      "E-Commerce",
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
    ],
  };

  return data;
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Bienvenido a Juandrobe
      </h1>
    </>
  );
}
