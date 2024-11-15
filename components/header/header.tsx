"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`${isHome ? "lg:absolute z-10" : ""} w-full mt-5`}>
      <Image
        className="mx-auto"
        src="/logo-concordia.png"
        alt="logo-concordia"
        width={230}
        height={60}
      />
    </header>
  );
}
