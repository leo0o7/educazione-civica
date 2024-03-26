"use client";

import useWindowDimensions from "@/useWindowDimensions";
import IndexCard from "./cards/indexCard";

import { TypewriterEffect } from "./ui/typewriter-effect";
import { usePathname } from "next/navigation";

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
        <IndexCard title="" />

        <IndexCard title="Federico Bianchi" />
        <IndexCard title="Gabriele Palumbo" />
        <IndexCard title="Leonardo Giardino" />
        <IndexCard title="" />
      </div>
      <div className={`grid ${cols[1]} max-w-[100vw] mb-40`}>
        <IndexCard title="" />
        <IndexCard title="Gabriele Petrella" className="" />
        <IndexCard title="Daniele Toppi" />
        <IndexCard title="" />
      </div>
    </div>
  );
}
