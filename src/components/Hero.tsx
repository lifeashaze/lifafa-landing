import { LifafaHeroMarquee } from "./Marquee";
import { LifafaHeroMarquee2 } from "./Marquee2";

export function Hero() {
  return (
    <>
      <div className="text-center h-[75vh]">
        <h1 className="text-4xl font-bold text-center ">Hero Section</h1>
      </div>
      <LifafaHeroMarquee />
      <LifafaHeroMarquee2 />
    </>
  );
}
