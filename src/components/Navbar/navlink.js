"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navlink({ name, href }) {
  const pathname = usePathname();

  return (
    <li className="w-full" key={name}>
      <Link
        href={href}
        className={`block py-2 px-3 text-white  rounded-sm  md:p-0 dark:text-white
          ${
            pathname === href
              ? "text-white"
              : "text-gray-900 md:bg-transparent md:hover:text-blue-900 md:hover:bg-transparent"
          }
          `}
      >
        {name}
      </Link>
    </li>
  );
}