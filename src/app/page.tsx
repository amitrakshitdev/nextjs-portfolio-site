import Image from "next/image";
import Header from "@/components/Header/index";
import RippleCanvas from "@/components/RippleCanvas";
import heroBGImg from "@/assets/images/bg-hero-section.jpg";
import profileImg from "@/assets/images/profile-pic.jpg";
import clsx from "clsx";
import Section from "@/components/Section";
import selfImg from "../../public/images/self-picture-1.jpg";
import { useMemo } from "react";
export default function Home() {
  const userDetails = useMemo(() => {
    return {
      Birthday: "November 24, 1996",
      Phone: "+91 8918075974",
      Email: "amit.rakshit007@gmail.com",
      From: "Haripal, Hooghly, West Bengal, India",
      Language: "English, Bengali, Hindi",
      "Working at": "HCL Software, Bengaluru, India"
    };
  }, []);
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
                I am a frondend developer with 4+ years of industry experience.
                Currently, I am working as a Senior Software Engineer II at HCL
                Software. If you wish to build web app, mobile app, website,
                dashboard, backend api etc., I can help you with my full
                credibility.
              </h5>
            </div>
          </div>
        </RippleCanvas>
      </section>
      <section className={clsx(["px-4"])}>
        <Section title={"Aboute ME"} className={clsx(["my-10"])}>
          <div
            className={clsx(
              ["flex flex-col items-center"],
              ["lg:flex-row", "lg:items-start", "lg:justify-center"]
            )}
          >
            <img
              src={selfImg.src}
              className={clsx("w-full px-0 max-w-[576px]", [
                "lg:w-[40%] lg:px-4 lg:max-w-[432px]",
              ])}
            />
            <div
              className={clsx(
                ["py-7", "w-full"],
                ["sm:w-auto"],
                ["lg:w-[40%] lg:max-w-[432px] lg:px-4 lg:py-0"]
              )}
            >
              <h2 className="text-3xl mb-4">
                Hi There! I am <br />
                <span>Amit Rakshit</span>
              </h2>
              <h3 className="text-2xl text-daccent-100 mb-4">
                Senior Software Engineer
              </h3>
              <h5
                className={clsx(
                  ["text-left", "text-dwhite-400", "max-w-xl"],
                  ["mb-5"]
                )}
              >
                I am a fullstack engineer with focus on complex web app
                building. I am having experience of more than 4 years.
                Technologies I am expert are React, NodeJs, JavaScript,
                TypeScript, python etc.
              </h5>
              <div
                className={clsx("overflow-x-scroll w-full mb-5", [
                  "lg:overflow-auto",
                ])}
              >
                <ul
                  className={clsx(
                    [
                      "text-left",
                      "text-dwhite-400",
                      "w-full",
                      "whitespace-nowrap",
                    ],
                    ["lg:whitespace-nowrap"]
                  )}
                >
                  {Object.entries(userDetails).map((elem) => (
                    <li className={clsx(["mb-3"])}>
                      <span className="inline-block w-[35%] max-w-[112px]">
                        {elem[0]}
                      </span>
                      :<span className="ml-2">{elem[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={clsx([
                  "bg-daccent-100 px-7 py-2 rounded-3xl text-sm",
                  "text-black",
                ])}
              >
                Download CV
              </button>
            </div>
          </div>
        </Section>
      </section>
    </main>
  );
}
