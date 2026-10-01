import Image from "next/image";

export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image src="/images/flame.png" alt="" width={34} height={44} className="h-10 w-auto" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl tracking-[0.18em] uppercase ${light ? "text-white" : "text-ink"}`}>
          Turquoise <span className="text-teal">Kitchen</span>
        </span>
        <span className={`mt-1 font-serif text-[0.8rem] italic ${light ? "text-white/75" : "text-bronze"}`}>
          Turkish · Mediterranean
        </span>
      </span>
    </span>
  );
}
