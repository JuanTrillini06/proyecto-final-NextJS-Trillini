export function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Contact",
    description: "Get in touch with us",
    domain: "https://ecommerce.com",
    keywords: ["About Us", "E-Commerce"],
  };
}

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mt-10">
        Contactános
      </h1>
      <p className="mt-4 text-lg max-w-lg">
        ¿Tienes alguna pregunta? ¡No dudes en contactarnos!
        Estamos aquí para ayudarte.{" "}
      </p>
    </div>
  );
}