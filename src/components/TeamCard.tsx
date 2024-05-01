import { TeamCardTab } from "./TeamCardTab";
import Image from "next/image";
export function TeamCards() {
  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-center gap-4 items-center mt-4">
        <div className="w-[320px] h-[360px] border-2 border-white rounded-lg bg-primary relative">
          <div className="h-full flex flex-col justify-between py-2 bg-[url('/worn-dots.png')]">
            <div className="p-4 text-3xl font-bold text-center tracking-wide leading-7">
              <h1>Prithvi Roy</h1>
            </div>
            <div className="mt-[20px]">
            <Image
                src="/Chinmay.svg"
                alt="Chinmay"
                height={500}
                width={500}
              />
            </div>
            <div className="w-full gap-2 flex flex-wrap justify-center absolute bottom-4">
              <TeamCardTab text="UI/UX" />
              <TeamCardTab text="Graphic Design" />
              <TeamCardTab text="Web Development" />
            </div>
          </div>
        </div>

        <div className="w-[320px] h-[360px] border-2 border-white rounded-lg bg-primary relative">
        <div className="h-full flex flex-col justify-between py-2 bg-[url('/worn-dots.png')]">
            <div className="p-4 text-3xl font-bold text-center tracking-wide leading-7">
              <h1>Chinmay Mhatre</h1>
            </div>
            <div className="mt-[20px]">
            <Image
                src="/Chinmay.svg"
                alt="Chinmay"
                height={500}
                width={500}
              />
            </div>
            <div className="w-full gap-2 flex flex-wrap justify-center absolute bottom-4">
              <TeamCardTab text="UI/UX" />
              <TeamCardTab text="Graphic Design" />
              <TeamCardTab text="Web Development" />
            </div>
          </div>
        </div>

        <div className="w-[320px] h-[360px] border-2 border-white rounded-lg bg-primary relative">
        <div className="h-full flex flex-col justify-between py-2 bg-[url('/worn-dots.png')]">
            <div className="p-4 text-3xl font-bold text-center tracking-wide leading-7">
              <h1>Prithvi Roy</h1>
              
            </div>
            <div className="mt-[-19px]"></div>
            <div className="w-full gap-2 flex flex-wrap justify-center absolute bottom-4">
              <TeamCardTab text="UI/UX" />
              <TeamCardTab text="Graphic Design" />
              <TeamCardTab text="Web Development" />
            </div>
          </div>
        </div>

        <div className="w-[320px] h-[360px] border-2 border-white rounded-lg bg-primary relative">
        <div className="h-full flex flex-col justify-between py-2 bg-[url('/worn-dots.png')]">
            <div className="p-4 text-3xl font-bold text-center tracking-wide leading-7">
              <h1>Prithvi Roy</h1>
            </div>
            <div className="mt-[-19px]"></div>
            <div className="w-full gap-2 flex flex-wrap justify-center absolute bottom-4">
              <TeamCardTab text="UI/UX" />
              <TeamCardTab text="Graphic Design" />
              <TeamCardTab text="Web Development" />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col xl:flex-row justify-center gap-4 items-center mt-4">
        <div className="w-[320px] h-[360px] border-2 border-white rounded-lg bg-primary relative">
        <div className="h-full flex flex-col justify-between py-2 bg-[url('/worn-dots.png')]">
            <div className="p-4 text-3xl font-bold text-center tracking-wide leading-7">
              <h1>Prithvi Roy</h1>
            </div>
            <div className="mt-[-19px]"></div>
            <div className="w-full gap-2 flex flex-wrap justify-center absolute bottom-4">
              <TeamCardTab text="UI/UX" />
              <TeamCardTab text="Graphic Design" />
              <TeamCardTab text="Web Development" />
            </div>
          </div>
        </div>

        <div className="w-[320px] h-[360px] border-2 border-white rounded-lg bg-primary relative">
        <div className="h-full flex flex-col justify-between py-2 bg-[url('/worn-dots.png')]">
            <div className="p-4 text-3xl font-bold text-center tracking-wide leading-7">
              <h1>Prithvi Roy</h1>
            </div>
            <div className="mt-[-19px]"></div>
            <div className="w-full gap-2 flex flex-wrap justify-center absolute bottom-4">
              <TeamCardTab text="UI/UX" />
              <TeamCardTab text="Graphic Design" />
              <TeamCardTab text="Web Development" />
            </div>
          </div>
        </div>

        <div className="w-[320px] h-[360px] border-2 border-white rounded-lg bg-primary relative">
        <div className="h-full flex flex-col justify-between py-2 bg-[url('/worn-dots.png')]">
            <div className="p-4 text-3xl font-bold text-center tracking-wide leading-7">
              <h1>Prithvi Roy</h1>
            </div>
            <div className="mt-[-19px]"></div>
            <div className="w-full gap-2 flex flex-wrap justify-center absolute bottom-4">
              <TeamCardTab text="UI/UX" />
              <TeamCardTab text="Graphic Design" />
              <TeamCardTab text="Web Development" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
