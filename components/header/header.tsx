"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`${isHome ? "lg:absolute z-10" : ""} w-full mt-5`}>
      <Link href="/" className="flex w-fit mx-auto">
        <Image
          className="mx-auto"
          src="/logo-concordia.png"
          alt="logo-concordia"
          width={230}
          height={60}
        />
      </Link>
    </header>
  );
}
