
import { Bricolage_Grotesque } from "next/font/google"
import { LifafaSectionMarquee } from "./SectionMarquee"
import { TeamCards } from "./TeamCard"

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export function OurTeam() {
    return (
        <>
        <div id="team" className="bg-background-dark  flex flex-col gap-10">
            <h2 className={"mt-10 text-4xl font-bold text-white text-center " + bricolage.className}>Our Team</h2>
            <TeamCards />
            <LifafaSectionMarquee />
        </div>
        </>
    )
}
