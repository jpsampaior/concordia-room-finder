import Link from "next/link";

export function AdditionalLinks({
  link,
  description,
}: {
  link: string;
  description: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-secondary hover:text-primary hover:underline ease-in-out mb-2"
    >
      <span className="text-sm">{description}</span>
    </Link>
  );
}
