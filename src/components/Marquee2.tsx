import Marquee from "react-fast-marquee";

export function LifafaHeroMarquee2() {
  return (
    <div className="flex -mt-20 p-4 text-4xl font-extrabold text-background-dark bg-primary border-4 border-background-dark border-r-0 border-l-0 border-solid leading-[56px] max-md:flex-wrap skew-y-[4deg] ">
      <Marquee speed={200}  autoFill={true}>
        <div className="flex">
          <p className="mr-10">lifafa works</p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ded1de15075456fa2acbf597e8ca418b0ddf7365c47da6ae1d2c65e5eafd638?"
            className="mr-10"
          />
        </div>
      </Marquee>
    </div>
  );
}