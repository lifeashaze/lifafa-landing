"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "UI/UX",
      value: "product",
      content: (
        <div className="flex justify-center items-center md:flex-row w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white  ">
          <div className="flex justify-center items-center">
            <div className="hidden lg:block h-[22rem] w-[20rem] md:h-[32rem] md:w-[25rem] border-2 border-background-dark mr-10 rounded-md">
              <img
                src="https://s3-alpha-sig.figma.com/img/b70f/129e/230244ecbb94a403aa4725d5bdbaa19f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PqdQGFawddCe6eagwCD3RwVKVEIRSKvJ1QHhZ017uoPYjUPR9PXnddIBDHtfchRV9bUcJPCTAoYifoCOucYffekd2VJfOwGJDrrfCG4NbyfW1M06BP2YVJCicK6tL4~oYPs-tI3qTtMc0pGQVIP4c0UexsQh0RW3-Gel9A8Z4ILxMs1~JozjszyrxOXoU6HG2jD8ziL~bxfw~BQm5q6lp0NPZ10BUjVwmPh9QhihgVXvDqYitqJCS4b2oR2-E6vVm~-DnPsHFY2g2oEybgQTRJWX8RnSChoz03WhbPC5MRuN~ZQ3OfKMTWFt2GU3d4x6mX4voq2-wcJTQdQaK5NFDw__"
                alt=""
                className="object-cover h-full w-full"
              />
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
        <div className="w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white  ">
          <p>Web Development tab</p>
        </div>
      ),
    },
    {
      title: "Graphic Design",
      value: "Graphic Design",
      content: (
        <div className="w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white  ">
          <p>Graphic Design</p>
        </div>
      ),
    },
    {
      title: "Motion Graphics",
      value: "Motion Graphics",
      content: (
        <div className="w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white  ">
          <p>Motion Graphics tab</p>
        </div>
      ),
    },
    {
      title: "3D & Product Design",
      value: "3D & Product Design",
      content: (
        <div className="w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white  ">
          <p>3D & Product Design tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[40rem]  [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
