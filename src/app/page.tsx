import Image from "next/image";
import Header from "@/components/Header/index";
import RippleCanvas from "@/components/RippleCanvas";
import heroBGImg from "@/assets/images/bg-hero-section.jpg";
import profileImg from "@/assets/images/profile-pic.jpg";
import clsx from "clsx";
import Section from "@/components/Section";
export default function Home() {
  return (
    <main className="w-screen h-auto">
      <Header style={{ zIndex: 1 }} />
      <section
        className={clsx(["relative", "mt-20"], ["w-screen"], ["flex"])}
        style={{ height: "calc(100vh - 80px)" }}
      >
        <RippleCanvas imgSrc={heroBGImg}>
          <div
            className={clsx([
              "relative w-full h-full",
              "flex flex-col items-center justify-center",
            ])}
          >
            <div
              className={clsx("flex flex-col items-center justify-center", [
                "px-4",
              ])}
            >
              <div
                className={clsx(
                  ["m-4"],
                  ["w-52 h-52"],
                  ["relative"],
                  ["rounded-full"],
                  ["overflow-hidden"],
                  ["border-[6px]", "border-white", "border-opacity-20"]
                )}
              >
                <img src={profileImg.src} alt="" />
              </div>
              <h1
                className={clsx([
                  "my-2",
                  "font-semibold",
                  "text-[40px] leading-[48px]",
                  "text-center",
                  "drop-shadow-md",
                ])}
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,1)" }}
              >
                Hi, this is{" "}
                <span className={"text-daccent-100"}>Amit Rakshit</span>
              </h1>
              <h5
                className={clsx(["text-center", "text-dwhite-400", "max-w-xl"])}
              >
                I am a fullstack developer with 4+ years of industry experience.
                Currently, I am working as a Senior Software Engineer II at HCL
                Software. If you wish to build web app, mobile app, website,
                dashboard, backend api etc., I can help you with my full
                credibility.
              </h5>
            </div>
          </div>
        </RippleCanvas>
      </section>
      <section>
        <Section title={"Aboute ME"} className={clsx(["my-10"])}>
          <div>
            
          </div>
        </Section>
      </section>
    </main>
  );
}
