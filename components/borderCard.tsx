import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface InfoCardProps {
  title: string;
  className?: string;
}

export default function BorderCard({ title, className }: InfoCardProps) {
  return (
    <Card
      className={cn(
        className,
        `border *:px-8 rounded-none p-8 ${
          title === "" ? "hidden lg:flex" : " "
        }`
      )}
    >
      {/* IMG */}
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
