import Image from "next/image";
import { TabsDemo } from "@/components/Tabs";
import { TeamCards } from "@/components/TeamCard";
import { OurTeam } from "@/components/Team";

export default function Home() {
  return (
    <div>
      <TabsDemo />
      <OurTeam />
    </div>
  );
}
