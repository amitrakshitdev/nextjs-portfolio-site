"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import headerData from "./header.json";
import "./header-style.css";
export default function Header({ ...rest }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {}, [isMenuOpen]);
  return (
    <header
      {...{ ...rest }}
      className={clsx(
        ["fixed w-full bg-dblack-50 text-dwhite-50 px-4 h-20"],
        ["top-0 left-0"]
      )}
    >
      <div
        className="relative 
      flex 
      justify-between
      items-center 
      h-full"
      >
        <div className="text-4xl font-semibold">
          <span className="text-daccent-100">A</span>
          <span>mit</span>
        </div>

        <menu onClick={toggleState}>
          <div className="menu h-[28px] w-[28px] flex items-center my-3 box-border">
            <span
              className={clsx(
                isMenuOpen ? "menu-btn-open" : "menu-btn-close",
                ["box-border", "block", "w-full", "h-[2px]"],
                [
                  "bg-gray-600",
                  "before:relative",
                  "before:block",
                  "before:content-{''}",
                  "before:w-[28px]",
                  "before:h-[2px]",
                  "before:bg-gray-600",
                  "before:top-[-8px]",
                ],
                [
                  "after:relative",
                  "after:block",
                  "after:content-{''}",
                  "after:w-[28px] after:h-[2px]",
                  "after:bg-gray-600",
                  "after:top-[7px]",
                ]
              )}
            ></span>
          </div>
          <ul
            className={clsx(
              [{ hidden: !isMenuOpen }],
              [
                "shadow-md",
                "overflow-hidden",
                "border-t",
                "block",
                "border-gray-700",
                "fixed",
                "left-0",
                "bg-dblack-50",
                "w-full",
                "top-20",
              ],
              ["py-3"]
            )}
          >
            {headerData.header.map((elem, idx) => (
              <li key={idx} className={clsx(["w-full"])}>
                <a
                  href={elem.link}
                  className={clsx(
                    ["block", "px-5 py-2", "w-full"],
                    ["text-sm", "font-normal", "leading-7", "text-dwhite-400"]
                  )}
                >
                  {elem.title}
                </a>
              </li>
            ))}
          </ul>
        </menu>
      </div>
    </header>
  );
}
