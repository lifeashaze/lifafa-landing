import Image from "next/image";

const TempHero = () => {
  return (
    <section className="relative bg-primary flex justify-center items-center h-[75vh]">
     {/* <div className="absolute -left-[50px] top-0 z-10">
        <Image src="/lifafa-sticker.svg" alt="Lifafa Sticker" width={150} height={100} />
      </div> */}
      <div className="text-center px-4">
        <div className="max-w-screen-lg mx-auto">
          <Image src="/logo.svg" alt="Logo" width={750} height={500} />
          <p className="text-background-dark mt-4 text-4xl font-bold">an envelope of creative solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default TempHero;