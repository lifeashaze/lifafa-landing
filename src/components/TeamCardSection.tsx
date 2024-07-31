import { Bricolage_Grotesque } from "next/font/google";
import TeamCard from "./TeamCard";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

interface TeamMember {
  fname: string;
  lname: string;
  imgSrc: string;
  roles: string[];
}

const team: TeamMember[] = [
  {
    fname: "Prithvi",
    lname: "Roy",
    imgSrc: "/Prithvi.png",
    roles: ["Motion Graphics"],
  },
  {
    fname: "Chinmay",
    lname: "Mhatre",
    imgSrc: "/Chinmay.png",
    roles: ["UI/UX", "Graphic Design", "Web Development"],
  },
  {
    fname: "Manan",
    lname: "Makhija",
    imgSrc: "/Manan.png",
    roles: ["Video Editing"],
  },
  {
    fname: "Abhishek",
    lname: "Bhagawati",
    imgSrc: "/Abhishek.png",
    roles: ["Web Development", "Client Liaison"],
  },
];

export function TeamCards() {
  return (
    <div>
      <div className="flex flex-col xl:flex-row xl:flex-wrap justify-center gap-4 mt-4 px-32 items-center">
        {team.map((member, index) => (
          <TeamCard key={index} fname={member.fname} lname={member.lname} imgSrc={member.imgSrc} roles={member.roles} />
        ))}
      </div>
    </div>
  );
}
