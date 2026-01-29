import Image from "next/image";
import Background from "@/public/a6ef4a6c68a9adfeda021ae900122039fa31e98a.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image src={Background} fill priority className="object-cover" alt="bg" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
