"use client";

import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export function Header() {
  return (
    <>
      <div className="flex z-10 relative justify-between p-6">
        <Image src="./logo.svg" alt="Lifafa Logo" width={150} height={150} />
        <div className="flex gap-8">
          <div className="flex gap-6">
            <Link href="#services">
              <button className="p-4 font-semibold">Services</button>
            </Link>
            <Link href="#team">
              <button className="p-4 font-semibold">Team</button>
            </Link>
          </div>
          <Link
            href="#contact"
            className={
              "flex  items-center px-4 gap-2 font-bold text-background-dark rounded-xl bg-primary border-2 border-background-dark shadow-[#282C6E] hover:shadow-[3px_3px_0px_0px_rgba(40,44,110,1)] transition-all hover:translate-y-[-3px] hover:translate-x-[-3px] mb-[-1px] md:ml-[-1px]" +
              bricolage.className
            }
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
