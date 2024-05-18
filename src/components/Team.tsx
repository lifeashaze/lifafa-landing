
import { Bricolage_Grotesque } from "next/font/google"
import { LifafaSectionMarquee } from "./SectionMarquee"
import { TeamCards } from "./TeamCardSection"

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export function OurTeam() {
    return (
        <div className="bg-background-dark">
        <div id="team" className="bg-background-dark  flex flex-col gap-12 pt-32 pb-48">
            <h2 className={"mt-10 text-5xl font-bold text-white text-center " + bricolage.className}>Our Team</h2>
            <TeamCards />
        </div>
        <LifafaSectionMarquee />
        </div>
    )
}
