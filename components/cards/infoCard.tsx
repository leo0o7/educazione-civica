import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  author: string;
  desc: string;
  to: string;
  img: string;
}

export default function InfoCard({
  title,
  author,
  desc,
  to,
  img,
}: InfoCardProps) {
  return (
    <Card className="border-0 shadow-[1px_0.2px_2px] shadow-primary h-[580px]">
      {/* IMG */}
      <img
        src={img}
        className="h-[325px] object-cover w-full rounded-lg rounded-b-none"
      />
      <CardHeader className="flex flex-row flex-wrap justify-between">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="w-full ms-0.5">
          Scritto da: {author}
        </CardDescription>
      </CardHeader>
      <CardContent>{desc}</CardContent>
      <CardFooter className="flex justify-end space-x-4 items-end mb-0">
        <Link
          className={buttonVariants({
            variant: "default",
          })}
          href={to || ""}
        >
          Scopri di più
        </Link>
      </CardFooter>
    </Card>
  );
}
