import Link from "next/link";

export function AdditionalLinks({
  link,
  title,
  description,
}: {
  link: string;
  title: string;
  description: string;
}) 
//{
//   return (
//     <Link href={link} target="_blank" className="text-zinc-300 hover:underline ease-in-out">
//       <span className="text-md font-semibold text-primary">{title}: </span>
//       <span className="text-sm">{description}</span>
//     </Link>
//   );
// 
//}

{
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-secondary hover:text-primary hover:underline ease-in-out mb-2"
    >
      <span className="text-md font-semibold text-primary">{title}: </span>
      <span className="text-sm">{description}</span>
    </Link>
  );
}

