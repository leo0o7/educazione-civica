import React from "react";
import Text from "./typography/text";

interface ParagraphProps {
  title: string;
  text: string[];
}

export default function Paragraph({ title, text }: ParagraphProps) {
  return (
    <>
      <Text type="h1" className="[&:not(:first-child)]:pt-40">
        {title}
      </Text>
      <div className="space-y-2 mt-8">
        {text.map((par, idx) => (
          <Text type="lg" className="text-justify font-normal" key={idx}>
            {par}
          </Text>
        ))}
      </div>
    </>
  );
}
