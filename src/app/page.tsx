import { Header } from "@/components/Header";
import { TabsDemo } from "@/components/Tabs";
import { OurTeam } from "@/components/Team";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import TempHero from "@/components/TempHero";
import { LifafaHeroMarquee } from "@/components/Marquee";
import { LifafaHeroMarquee2 } from "@/components/Marquee2";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <TempHero />
      <LifafaHeroMarquee />
      <LifafaHeroMarquee2 />
      <TabsDemo />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
}
