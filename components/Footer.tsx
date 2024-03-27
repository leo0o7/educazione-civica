"use client";

import useWindowDimensions from "@/useWindowDimensions";

import { TypewriterEffect } from "./ui/typewriter-effect";
import { usePathname } from "next/navigation";
import BorderCard from "./borderCard";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/accedi") return null;
  const { width } = useWindowDimensions();

  let cols = new Array(2);
  if (width > 1024) {
    cols[0] = `grid-cols-[0.2fr_1fr_1fr_1fr_0.2fr]`;
    cols[1] = `grid-cols-[0.1fr_1fr_1fr_0.1fr]`;
  } else if (width > 768) {
    cols[0] = `grid-cols-3`;
    cols[1] = `grid-cols-2`;
  }
  console.log(cols);
  const words = [
    {
      text: "Sito",
    },
    {
      text: "web",
    },
    {
      text: "creato",
    },
    {
      text: "da",
    },
  ];
  return (
    <div className="mt-72">
      <TypewriterEffect words={words} />

      <div className={`grid ${cols[0]} max-w-[100vw] mt-8`}>
        <BorderCard title="" />

        <BorderCard title="Federico Bianchi" />
        <BorderCard title="Gabriele Palumbo" />
        <BorderCard title="Leonardo Giardino" />
        <BorderCard title="" />
      </div>
      <div className={`grid ${cols[1]} max-w-[100vw] mb-40`}>
        <BorderCard title="" />
        <BorderCard title="Gabriele Petrella" className="" />
        <BorderCard title="Daniele Toppi" />
        <BorderCard title="" />
      </div>
    </div>
  );
}
