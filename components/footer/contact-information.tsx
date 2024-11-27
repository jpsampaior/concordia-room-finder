import { Linkedin } from "lucide-react";
import Link from "next/link";

export function ContactInformation({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  return (
    <Link href={`https://www.linkedin.com/in/${link}`} className="flex items-center gap-2">
      <Linkedin size={24} />
      <span>{name}</span>
    </Link>
  );
}
