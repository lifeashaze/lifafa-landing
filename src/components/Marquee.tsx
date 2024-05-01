import Marquee from "react-fast-marquee";

export function LifafaHeroMarquee() {
  return (
    <div className="flex p-4 -mt-10 text-4xl font-extrabold text-primary bg-background-dark border-4 border-primary border-r-0 border-l-0 border-solid leading-[56px] max-md:flex-wrap -skew-y-[4deg] ">
      <Marquee speed={200}  autoFill={true}>
        <div className="flex">
          <p className="mr-10 skew-y-[4deg]">lifafa works</p>
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