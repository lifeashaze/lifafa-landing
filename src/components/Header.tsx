"use client";

import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <div className="flex justify-between p-5">
        <Image src="./logo.svg" alt="Lifafa Logo" width={150} height={150} />
        <Link
          href="#contact"
          className="flex  items-center px-4 gap-2 font-bold rounded-xl bg-primary border-2 border-background-dark shadow-[#282C6E] hover:shadow-[3px_3px_0px_0px_rgba(40,44,110,1)] transition-all hover:translate-y-[-3px] hover:translate-x-[-3px] mb-[-1px] md:ml-[-1px]"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}
