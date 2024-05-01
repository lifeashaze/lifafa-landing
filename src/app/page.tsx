import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TabsDemo } from "@/components/Tabs";
import { OurTeam } from "@/components/Team";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <TabsDemo />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
}
