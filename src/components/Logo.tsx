import Image from "next/image";

export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Image
      src={light ? "/images/logo-light.png" : "/images/logo-dark.png"}
      alt="Turquoise Kitchen"
      width={1020}
      height={220}
      className={`h-10 w-auto sm:h-12 ${className}`}
    />
  );
}
