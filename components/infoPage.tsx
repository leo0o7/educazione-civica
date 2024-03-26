"use client";

import { GeminiHero } from "@/components/geminiPage";
import IndexCard from "@/components/cards/indexCard";
import Paragraph from "@/components/paragraph";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import useWindowDimensions from "@/useWindowDimensions";

interface PageText {
  title: string;
  content: string[];
}
interface InfoPageProps {
  title: string;
  description: string;
  indexes: string[];
  text: PageText[];
}
export default function InfoPage({
  title,
  description,
  indexes,
  text,
}: InfoPageProps) {
  const n = indexes.length;
  const { width } = useWindowDimensions();

  let cols = "";
  if (width > 1024) cols = `grid-cols-[0.2fr_${"1fr_".repeat(n)}0.2fr]`;
  else if (width > 768) cols = `grid-cols-${n}`;
  console.log(cols);
  console.log("grid-cols-3");
  console.log("grid-cols-[0.2fr_1fr_1fr_0.2fr]");
  return (
    <>
      <GeminiHero title={title} description={description} />
      <div className={`grid ${cols}  max-w-[100vw] mb-20`}>
        <IndexCard title="" />
        {indexes.map((index, idx) => (
          <IndexCard title={index} key={idx} />
        ))}
        <IndexCard title="" />
      </div>
      <TracingBeam>
        <div className="px-8 mt-40 [&>*:last-child]:pb-40">
          {text.map((val, idx) => (
            <Paragraph title={val.title} text={val.content} key={idx} />
          ))}
        </div>
      </TracingBeam>
    </>
  );
}
