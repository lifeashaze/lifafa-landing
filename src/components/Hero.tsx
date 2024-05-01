import Image from "next/image";
import { LifafaHeroMarquee } from "./Marquee";
import { LifafaHeroMarquee2 } from "./Marquee2";

export function Hero() {
  return (
    <>
      <div className="flex flex-col items-center text-7xl font-bold h-[100vh] leading-normal ">
        <h1>
          An <span className="text-primary underline">envelope</span>
        </h1>
        <div className="flex items-center gap-2">
          <Image src="/idk.svg" alt="idk" width={300} height={300} />
          <h1>of</h1>
        </div>
        <h1><span className="font-normal text-secondary">creative</span> solutions</h1>
      </div>
      <LifafaHeroMarquee />
      <LifafaHeroMarquee2 />
    </>
  );
}
