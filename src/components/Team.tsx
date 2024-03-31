import { LifafaMarquee } from "./Marquee"
import { TeamCards } from "./TeamCard"




export function OurTeam() {
    return (
        <>
        <div className="bg-background-dark  flex flex-col gap-10">
            <h2 className="mt-10 text-4xl font-bold text-white text-center">Our Team</h2>
            <TeamCards />
            <LifafaMarquee />
        </div>
        </>
    )
}