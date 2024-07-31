"use client";

import React from 'react';
import { Tabs } from "./ui/tabs";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

interface ServiceContent {
  title: string;
  description: string[];
}

interface ServicesContent {
  [key: string]: ServiceContent;
}


const servicesContent: ServicesContent = {
  "UI/UX": {
    title: "Crafting Digital Experiences That Captivate",
    description: [
      "Our team creates intuitive user flows and wireframes, ensuring easy navigation.",
      "We develop interactive prototypes to test the user experience before full development.",
      "Our designers create visually stunning user interfaces that align with your brand identity.",
      "We perform usability tests to ensure a smooth and enjoyable user experience.",
      "We prioritize inclusive design principles for accessibility."
    ]
  },
  "Web Development": {
    title: "Building Digital Solutions That Drive Growth",
    description: [
      "We create responsive and scalable websites tailored to your business needs.",
      "Our full-stack expertise ensures seamless functionality and user experience.",
      "We specialize in custom web applications, e-commerce platforms, and CMS.",
      "Our agile development approach allows for continuous improvement.",
      "We prioritize performance optimization, security, and SEO best practices."
    ]
  },
  "Graphic Design": {
    title: "Visual Storytelling That Leaves a Lasting Impression",
    description: [
      "We craft compelling visual identities that embody your brand's essence.",
      "Our expertise spans print and digital media, including logo design and social media graphics.",
      "We create eye-catching infographics that make complex information accessible.",
      "Our team designs intuitive user interfaces for websites and applications.",
      "We offer comprehensive brand guideline development for consistency."
    ]
  },
  "Motion Graphics": {
    title: "Bringing Your Brand to Life Through Animation",
    description: [
      "We create captivating 2D and 3D animations that engage your audience.",
      "Our services include logo animations, title sequences, and animated infographics.",
      "We specialize in producing high-impact explainer videos.",
      "Our team crafts stunning visual effects and motion design elements.",
      "We develop interactive motion graphics for immersive user experiences."
    ]
  },
  "Video Editing": {
    title: "Transforming Raw Footage into Compelling Stories",
    description: [
      "We offer comprehensive video editing services for various projects.",
      "Our team specializes in color correction, sound design, and special effects.",
      "We provide seamless transitions and narrative structuring.",
      "Our services include corporate video editing and social media content creation.",
      "We work closely with clients to deliver polished, engaging video content."
    ]
  },
  "3D & Product Design": {
    title: "Sculpting Ideas into Tangible Realities",
    description: [
      "We offer cutting-edge 3D modeling and product design services.",
      "Our team creates detailed 3D models for product prototyping and visualization.",
      "We specialize in industrial design, creating functional and aesthetically pleasing products.",
      "Our services include 3D printing preparation and photorealistic rendering.",
      "We develop innovative solutions that meet both form and function requirements."
    ]
  }
};



interface TabContentProps {
  title: string;
  description: string[];
}

const TabContent: React.FC<TabContentProps> = ({ title, description }) => (
  <div className="flex justify-center items-center md:flex-row w-full overflow-hidden relative h-full border-[3px] border-background-dark rounded-2xl p-10 text-background-dark bg-white">
    <div className="flex justify-center items-center">
      <div className="bg-[url('/worn-dots.png')] bg-primary hidden lg:block h-full w-[20rem] md:h-[32rem] md:w-[25rem] border-2 border-background-dark mr-10 rounded-md">
        <img src="/iPhone-Mockup.svg" alt="" className="object-cover h-full w-full" />
      </div>
      <div className="gap-10 flex flex-col">
        <h1 className={`text-background-dark text-xl md:text-3xl font-bold ${bricolage.className}`}>
          {title}
        </h1>
        <div className="text-black flex flex-col gap-3 md:w-[30rem] w-auto">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

interface Tab {
  title: string;
  value: string;
  content: React.ReactNode;
}

export function TabsDemo(): JSX.Element {
  const tabs: Tab[] = Object.entries(servicesContent).map(([key, value]) => ({
    title: key,
    value: key,
    content: <TabContent title={value.title} description={value.description} />
  }));

  return (
    <div id="services" className={`[perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-center justify-center my-40 ${bricolage.className}`}>
      <h2 className="mb-20 text-5xl font-bold text-center w-full">Services</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}