import { cn } from "@/lib/utils";
import Text from "../typography/text";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1  px-8 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  author,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  author?: React.ReactNode;
  link: string | "";
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black/10 dark:border-white/10 bg-white border border-transparent flex flex-col space-y-4 h-[410px]",
        className
      )}
    >
      <Link href={link}>
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
            <Text type="muted">{author}</Text>
          </div>
          <div className="font-sans font-normal text-neutral-600 text-md dark:text-neutral-300">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
};
