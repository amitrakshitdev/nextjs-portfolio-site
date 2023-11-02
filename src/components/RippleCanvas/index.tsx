"use client";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState, MouseEvent } from "react";
import $ from "jquery";
import "jquery.ripples";
interface RippleCanvasProps {
  imgSrc: StaticImageData;
  children: React.ReactNode;
}

export default function RippleCanvas({ imgSrc, children }: RippleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    // @ts-ignore
    $("#hero-bg").ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        setCanvasSize({ width: canvas.width, height: canvas.height });
      }
    };

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [imgSrc]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    return () => {};
  }, [imgSrc]);
  return (
    <>
      <div
        id="hero-bg"
        className={"top-0 left-0 h-full w-full"}
        style={{
          position: "absolute",
          backgroundImage: `url("${imgSrc.src}")`,
          backgroundPosition: "50%",
          backgroundSize: "auto 155%",
          backgroundRepeat: "no-repeat",
          // filter: "blur(1px)",
        }}
      >
        <div className="absolute w-full h-full" style={{backdropFilter: "blur(2px)"}}></div>
        {children}
      </div>
    </>
  );
}
