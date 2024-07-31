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
      "Our team creates intuitive information structures and user flows, ensuring that your digital product is easy to navigate and use.",
      "We develop detailed wireframes and interactive prototypes to visualize and test the user experience before full development.",
      "Our designers create visually stunning and cohesive user interfaces that align with your brand identity and enhance user engagement.",
      "We perform comprehensive usability tests to identify and address any pain points, ensuring a smooth and enjoyable user experience.",
      "We prioritize inclusive design principles to make your digital products accessible to users with diverse abilities and needs.",
    ]
  },
  "Web Development": {
    title: "Building Digital Solutions That Drive Growth",
    description: [
      "We create responsive and scalable websites tailored to your unique business needs and goals.",
      "Our full-stack development expertise covers both front-end and back-end technologies, ensuring seamless functionality and user experience.",
      "We specialize in developing custom web applications, e-commerce platforms, and content management systems that streamline your operations.",
      "Our agile development approach allows for flexibility and continuous improvement throughout the project lifecycle.",
      "We prioritize performance optimization, security, and SEO best practices to ensure your web solution stands out in the digital landscape."
    ]
  },
  "Graphic Design": {
    title: "Visual Storytelling That Leaves a Lasting Impression",
    description: [
      "We craft compelling visual identities that resonate with your target audience and embody your brand's essence.",
      "Our expertise spans print and digital media, including logo design, brochures, billboards, social media graphics, and packaging design.",
      "We create eye-catching infographics and data visualizations that make complex information accessible and engaging.",
      "Our team designs intuitive user interfaces for websites and applications, enhancing user experience and interaction.",
      "We offer comprehensive brand guideline development to ensure consistency across all your visual communications."
    ]
  },
  "Motion Graphics": {
    title: "Bringing Your Brand to Life Through Animation",
    description: [
      "We create captivating 2D and 3D animations that tell your brand's story and engage your audience across various platforms.",
      "Our motion graphics services include eye-catching logo animations, dynamic title sequences, and animated infographics that simplify complex ideas.",
      "We specialize in producing high-impact explainer videos that clearly communicate your product's value proposition and features.",
      "Our team crafts stunning visual effects and motion design elements for video content, enhancing its overall appeal and effectiveness.",
      "We develop interactive motion graphics for websites and apps, creating immersive user experiences that leave a lasting impression."
    ]
  },
  "Video Editing": {
    title: "Transforming Raw Footage into Compelling Stories",
    description: [
      "We offer comprehensive video editing services for a wide range of projects, from short promotional clips to full-length films.",
      "Our team specializes in color correction, sound design, and special effects to enhance the visual appeal of your footage.",
      "We provide seamless transitions, pacing adjustments, and narrative structuring to ensure your message is conveyed effectively.",
      "Our services include corporate video editing, event highlight reels, social media content creation, and documentary post-production.",
      "We work closely with clients to understand their vision and deliver polished, engaging video content that meets their objectives."
    ]
  },
  "3D & Product Design": {
    title: "Sculpting Ideas into Tangible Realities",
    description: [
      "We offer cutting-edge 3D modeling and product design services to help visualize and refine your concepts.",
      "Our team creates detailed 3D models for product prototyping, architectural visualization, and virtual reality experiences.",
      "We specialize in industrial design, creating functional and aesthetically pleasing products from initial concept to final manufacturing specifications.",
      "Our services include 3D printing preparation, photorealistic rendering, and animated product demonstrations.",
      "We combine creativity with technical expertise to develop innovative solutions that meet both form and function requirements."
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