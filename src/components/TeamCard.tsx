import Image from "next/image";
import { TeamCardTab } from "./TeamCardTab";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

interface props {
  fname: string;
  lname: string;
  imgSrc: string;
  roles: string[];
}

const TeamCard = ({fname, lname, imgSrc, roles} : props) => {
  return (
    <div className="w-[320px] border-2 border-white rounded-lg bg-primary relative">
      <div className="h-full flex flex-col justify-between bg-[url('/worn-dots.png')]">
        <div
          className="p-4 text-5xl font-bricolage text-center tracking-wide leading-10"
        >
          <h1 className={bricolage.className + " font-extrabold"}>
            {fname}
            <br/>
            {lname}
          </h1>
        </div>
        <div className="mt-[20px]">
          <Image src={imgSrc} alt={`${fname} ${lname} image`} height={500} width={500} className="relative z-10 -mt-14"/>
        </div>
        <div className="w-full gap-2 flex flex-wrap justify-center absolute bottom-4">
          {roles.map((role) => (
            <TeamCardTab key={role} text={role} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
