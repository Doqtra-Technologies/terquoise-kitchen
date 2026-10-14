import Image from "next/image";

export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <Image
      src={light ? "/images/logo-light.webp" : "/images/logo-dark.webp"}
      alt="Turquoise Kitchen"
      width={460}
      height={99}
      className={`h-10 w-auto sm:h-12 ${className}`}
    />
  );
}
