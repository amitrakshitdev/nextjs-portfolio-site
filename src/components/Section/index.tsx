"use client";
import clsx from "clsx";
import React from "react";
import "./section-style.css";
interface SectionProps {
  title: String;
  children: React.ReactNode;
  className?: String;
  style?: React.CSSProperties;
}
function Section({ title, className, style, children }: SectionProps) {
  return (
    <section className={clsx(["min-h-screen"], className)} {...{ style }}>
      {title && (
        <div
          className={clsx(
            "section-title",
            ["relative", "uppercase"],
            ["flex flex-col items-center"],
            ["min-h-[72px] my-2"]
          )}
        >
          <h1
            className={clsx([
              "hidden lg:block",
              "font-bold text-7xl",
              "opacity-5",
            ])}
          >
            {title}
          </h1>
          <h4
            className={clsx(
              "section-title-text",
              ["text-daccent-100 text-2xl text-center", "absolute top-1"],
              ["before:bg-white before:opacity-10"],
              ["after:bg-daccent-100"]
            )}
          >
            {title}
          </h4>
        </div>
      )}
      <div>{children}</div>
    </section>
  );
}

export default Section;
