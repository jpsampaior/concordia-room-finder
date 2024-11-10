import Image from "next/image";

export function Header() {
  return (
    <header className="z-10 my-5">
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
