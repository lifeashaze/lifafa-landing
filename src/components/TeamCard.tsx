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
            <div className="overflow-hidden mt-[20px] border-2 border-black">
              <Image
                src="/Prithvi.svg"
                alt="Prithvi"
                height={400}
                width={400}
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
          <div className="h-full flex flex-col justify-between py-2 bg-[url('https://s3-alpha-sig.figma.com/img/1a3d/dee7/6f70b2257ba86cf9c409a1cb587cd4b2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTiNW~JdgoZyBEliAogrlTga6qb36xyv6vKnsPswWd-mOOAWjO7-bYwMGx3Lu6mc6XANl7jqUasbH0AofcUBl5Y9i8UcsIEYeeUtAyXDomO~j2VVoSz3zQz4pgpWV1pMHEhnx6KZE9Ez~copZ3lBn93B~wA~pGR15nf9kkYLEreV8ZYjAqKdk0Xq7frPal5ZGqwBQ768ZkjqMdEzwV8kvoSp5HsFDFGqhMNiJ48d-JEHwsi87ZtFAnOfrvKCYyDB~SQTQDFODHk2thH7ZRrW3~L7R7DreBE0VqiluSVhsWgDZzZnY1r71AStCnUXdoNKhpIvZ8dLcT3p6TF3Nt5j8Q__')]">
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
          <div className="h-full flex flex-col justify-between py-2 bg-[url('https://s3-alpha-sig.figma.com/img/1a3d/dee7/6f70b2257ba86cf9c409a1cb587cd4b2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTiNW~JdgoZyBEliAogrlTga6qb36xyv6vKnsPswWd-mOOAWjO7-bYwMGx3Lu6mc6XANl7jqUasbH0AofcUBl5Y9i8UcsIEYeeUtAyXDomO~j2VVoSz3zQz4pgpWV1pMHEhnx6KZE9Ez~copZ3lBn93B~wA~pGR15nf9kkYLEreV8ZYjAqKdk0Xq7frPal5ZGqwBQ768ZkjqMdEzwV8kvoSp5HsFDFGqhMNiJ48d-JEHwsi87ZtFAnOfrvKCYyDB~SQTQDFODHk2thH7ZRrW3~L7R7DreBE0VqiluSVhsWgDZzZnY1r71AStCnUXdoNKhpIvZ8dLcT3p6TF3Nt5j8Q__')]">
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
          <div className="h-full flex flex-col justify-between py-2 bg-[url('https://s3-alpha-sig.figma.com/img/1a3d/dee7/6f70b2257ba86cf9c409a1cb587cd4b2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTiNW~JdgoZyBEliAogrlTga6qb36xyv6vKnsPswWd-mOOAWjO7-bYwMGx3Lu6mc6XANl7jqUasbH0AofcUBl5Y9i8UcsIEYeeUtAyXDomO~j2VVoSz3zQz4pgpWV1pMHEhnx6KZE9Ez~copZ3lBn93B~wA~pGR15nf9kkYLEreV8ZYjAqKdk0Xq7frPal5ZGqwBQ768ZkjqMdEzwV8kvoSp5HsFDFGqhMNiJ48d-JEHwsi87ZtFAnOfrvKCYyDB~SQTQDFODHk2thH7ZRrW3~L7R7DreBE0VqiluSVhsWgDZzZnY1r71AStCnUXdoNKhpIvZ8dLcT3p6TF3Nt5j8Q__')]">
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
          <div className="h-full flex flex-col justify-between py-2 bg-[url('https://s3-alpha-sig.figma.com/img/1a3d/dee7/6f70b2257ba86cf9c409a1cb587cd4b2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTiNW~JdgoZyBEliAogrlTga6qb36xyv6vKnsPswWd-mOOAWjO7-bYwMGx3Lu6mc6XANl7jqUasbH0AofcUBl5Y9i8UcsIEYeeUtAyXDomO~j2VVoSz3zQz4pgpWV1pMHEhnx6KZE9Ez~copZ3lBn93B~wA~pGR15nf9kkYLEreV8ZYjAqKdk0Xq7frPal5ZGqwBQ768ZkjqMdEzwV8kvoSp5HsFDFGqhMNiJ48d-JEHwsi87ZtFAnOfrvKCYyDB~SQTQDFODHk2thH7ZRrW3~L7R7DreBE0VqiluSVhsWgDZzZnY1r71AStCnUXdoNKhpIvZ8dLcT3p6TF3Nt5j8Q__')]">
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
          <div className="h-full flex flex-col justify-between py-2 bg-[url('https://s3-alpha-sig.figma.com/img/1a3d/dee7/6f70b2257ba86cf9c409a1cb587cd4b2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTiNW~JdgoZyBEliAogrlTga6qb36xyv6vKnsPswWd-mOOAWjO7-bYwMGx3Lu6mc6XANl7jqUasbH0AofcUBl5Y9i8UcsIEYeeUtAyXDomO~j2VVoSz3zQz4pgpWV1pMHEhnx6KZE9Ez~copZ3lBn93B~wA~pGR15nf9kkYLEreV8ZYjAqKdk0Xq7frPal5ZGqwBQ768ZkjqMdEzwV8kvoSp5HsFDFGqhMNiJ48d-JEHwsi87ZtFAnOfrvKCYyDB~SQTQDFODHk2thH7ZRrW3~L7R7DreBE0VqiluSVhsWgDZzZnY1r71AStCnUXdoNKhpIvZ8dLcT3p6TF3Nt5j8Q__')]">
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
          <div className="h-full flex flex-col justify-between py-2 bg-[url('https://s3-alpha-sig.figma.com/img/1a3d/dee7/6f70b2257ba86cf9c409a1cb587cd4b2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTiNW~JdgoZyBEliAogrlTga6qb36xyv6vKnsPswWd-mOOAWjO7-bYwMGx3Lu6mc6XANl7jqUasbH0AofcUBl5Y9i8UcsIEYeeUtAyXDomO~j2VVoSz3zQz4pgpWV1pMHEhnx6KZE9Ez~copZ3lBn93B~wA~pGR15nf9kkYLEreV8ZYjAqKdk0Xq7frPal5ZGqwBQ768ZkjqMdEzwV8kvoSp5HsFDFGqhMNiJ48d-JEHwsi87ZtFAnOfrvKCYyDB~SQTQDFODHk2thH7ZRrW3~L7R7DreBE0VqiluSVhsWgDZzZnY1r71AStCnUXdoNKhpIvZ8dLcT3p6TF3Nt5j8Q__')]">
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
