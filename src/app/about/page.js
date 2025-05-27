export function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "About Us",
    description: "Learn more about our company and team",
    domain: "https://ecommerce.com",
    keywords: ["About Us", "E-Commerce"],
  };
}

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold  text-center mt-10">
        Nuestra tienda
      </h1>
      <p className="mt-4 text-lg max-w-lg">
        Buscamos un producto confiable, duradero y economico.
        Al no encontrar dicho producto, nos preguntamos:
        ¿Y si lo brindamos nosotros?
        Y asi surgio Jaundrobe, una tienda donde encontrar
        eso que buscas.{" "}
      </p>
    </div>
  );
}