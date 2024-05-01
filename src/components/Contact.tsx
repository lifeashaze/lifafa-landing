import { Bricolage_Grotesque } from "next/font/google";
import CalComponent from "./Cal";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export function Contact() {
  return (
    <>
      <div id="contact">
        <h2 className={"my-10 text-4xl font-bold text-center " + bricolage.className}>
          Got an idea? Contact us!
        </h2>
        <CalComponent  />
      </div>
    </>
  );
}
