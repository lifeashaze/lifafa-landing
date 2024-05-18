import Image from "next/image";
import { LifafaHeroMarquee } from "./Marquee";
import { LifafaHeroMarquee2 } from "./Marquee2";

export function Hero() {
  return (
    <>
      <Image
        src="/hero.png"
        alt="hero"
        width={1920}
        height={1080}
        className="relative h-[70vh] object-contain scale-125 -z-1"
      />
      <LifafaHeroMarquee />
      <LifafaHeroMarquee2 />
    </>
  );
}
