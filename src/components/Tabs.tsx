"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "UI/UX",
      value: "UI/UX",
      content: (
        <div className="flex justify-center items-center md:flex-row w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl py-10  text-background-dark bg-white  ">
          <div className="flex justify-center items-center">
            <div className="bg-[url('/worn-dots.png')] bg-primary hidden lg:block h-full w-[20rem] md:h-[32rem] md:w-[25rem] border-2 border-background-dark mr-10 rounded-md">
              <img src="/iPhone-Mockup.svg" alt="" className="object-cover h-full w-full" />
            </div>
            <div className="gap-10 flex flex-col">
              <h1 className="text-background-dark text-xl md:text-3xl font-bold">
                Everything from a <br /> landing page to large scale apps
              </h1>
              <div className="text-black flex flex-col gap-3 w-[30rem]">
                <p>
                  UX : We offer UX design as a standalone service, tailored to
                  meet specific project needs. Our expertise spans various
                  steps, with UX audit and UX analysis.
                </p>
                <p>
                  UI : Our UI design service involves exploring, researching,
                  creating wireframes of different details, and finally, shaping
                  the user interface screen flows.
                </p>
                <p>
                  User Testing : We conduct user interviews for your interface
                  and provide a comprehensive report highlighting areas for
                  improvement based on user feedback and our expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Web Development",
      value: "Web Development",
      content: (
        <div className="flex justify-center items-center md:flex-row w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white  ">
          <div className="flex justify-center items-center">
            <div className="bg-[url('/worn-dots.png')] bg-primary hidden lg:block h-full w-[20rem] md:h-[32rem] md:w-[25rem] border-2 border-background-dark mr-10 rounded-md">
            <img src="/iPhone-Mockup.svg" alt="" className="object-cover h-full w-full" />
            </div>
            <div className="gap-10 flex flex-col">
              <h1 className="text-background-dark text-xl md:text-3xl font-bold">
                Everything from a <br /> landing page to large scale apps
              </h1>
              <div className="text-black flex flex-col gap-3 w-[30rem]">
                <p>
                  We make promotional sites, single page applications, web apps
                </p>
                <p>Full stack websites according to the clients needs</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Graphic Design",
      value: "Graphic Design",
      content: (
        <div className="flex justify-center items-center md:flex-row w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white  ">
          <div className="flex justify-center items-center">
            <div className="bg-[url('/worn-dots.png')] bg-primary hidden lg:block h-full w-[20rem] md:h-[32rem] md:w-[25rem] border-2 border-background-dark mr-10 rounded-md">
            <img src="/iPhone-Mockup.svg" alt="" className="object-cover h-full w-full" />
            </div>
            <div className="gap-10 flex flex-col">
              <h1 className="text-background-dark text-xl md:text-3xl font-bold">
                Everything from a <br /> landing page to large scale apps
              </h1>
              <div className="text-black flex flex-col gap-3 w-[30rem]">
                <p>
                  Helping brands stand out through digital content and print
                  media.
                </p>
                <p>
                  From posters, brochures and banners for events and print and
                  digital media for companies, we offer wide range of expertise
                  to aid you in every way possible
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Motion Graphics",
      value: "Motion Graphics",
      content: (
        <div className="flex justify-center items-center md:flex-row w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white  ">
          <div className="flex justify-center items-center">
            <div className="bg-[url('/worn-dots.png')] bg-primary hidden lg:block h-full w-[20rem] md:h-[32rem] md:w-[25rem] border-2 border-background-dark mr-10 rounded-md">
            <img src="/iPhone-Mockup.svg" alt="" className="object-cover h-full w-full" />
            </div>
            <div className="gap-10 flex flex-col">
              <h1 className="text-background-dark text-xl md:text-3xl font-bold">
                Everything from a <br /> landing page to large scale apps
              </h1>
              <div className="text-black flex flex-col gap-3 w-[30rem]">
                <p>
                  We help companies create and display their brand identity and
                  their function via Title Animations, Explainer Videos, Logo
                  Animations and lot more
                </p>
                <p>We help clothing brands showcase their creative de</p>
                <p>
                  We help companies to create and display their brand identity
                  via Title Animations, Explainer Videos, Logo Animations and
                  lot more
                </p>
                <p>We provide creative solutions for motion design needs</p>
                <p>
                  We also help clothing brands to display their creative designs
                  with dynamic animations and 3D models of characters
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Video Editing",
      value: "Video Editing",
      content: (
        <div className=" flex justify-center items-center md:flex-row w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl text-background-dark bg-white  ">
          <div className="flex justify-center items-center">
            <div className="bg-[url('/worn-dots.png')] bg-primary hidden lg:block h-full w-[20rem] md:h-[32rem] md:w-[25rem] border-2 border-background-dark mr-10 rounded-md">
            <img src="/iPhone-Mockup.svg" alt="" className="object-cover h-full w-full" />
            </div>
            <div className="gap-10 flex flex-col">
              <h1 className="text-background-dark text-xl md:text-3xl font-bold">
                Everything from a <br /> landing page to large scale apps
              </h1>
              <div className="text-black flex flex-col gap-3 w-[30rem]">
                <p>
                  UX : We offer UX design as a standalone service, tailored to
                  meet specific project needs. Our expertise spans various
                  steps, with UX audit and UX analysis.
                </p>
                <p>
                  UI : Our UI design service involves exploring, researching,
                  creating wireframes of different details, and finally, shaping
                  the user interface screen flows.
                </p>
                <p>
                  User Testing : We conduct user interviews for your interface
                  and provide a comprehensive report highlighting areas for
                  improvement based on user feedback and our expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "3D & Product Design",
      value: "3D & Product Design",
      content: (
        <div className="flex justify-center items-center md:flex-row w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white  ">
          <div className="flex justify-center items-center">
            <div className="bg-[url('/worn-dots.png')] bg-primary hidden lg:block h-full w-[20rem] md:h-[32rem] md:w-[25rem] border-2 border-background-dark mr-10 rounded-md">
            <img src="/iPhone-Mockup.svg" alt="" className="object-cover h-full w-full" />
            </div>
            <div className="gap-10 flex flex-col">
              <h1 className="text-background-dark text-xl md:text-3xl font-bold">
                Everything from a <br /> landing page to large scale apps
              </h1>
              <div className="text-black flex flex-col gap-3 w-[30rem]">
                <p>
                  UX : We offer UX design as a standalone service, tailored to
                  meet specific project needs. Our expertise spans various
                  steps, with UX audit and UX analysis.
                </p>
                <p>
                  UI : Our UI design service involves exploring, researching,
                  creating wireframes of different details, and finally, shaping
                  the user interface screen flows.
                </p>
                <p>
                  User Testing : We conduct user interviews for your interface
                  and provide a comprehensive report highlighting areas for
                  improvement based on user feedback and our expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[50rem]  [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <h2 className="mb-20 text-5xl font-bold text-center  w-full">Services</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}
