import { cn } from "@/lib/utils";

interface TextProps {
  type: "muted" | "sm" | "lg" | "lead" | "p" | "h4" | "h3" | "h2" | "h1";
  className?: string;
  children: React.ReactNode;
}

export default function Text({ type, className, children }: TextProps) {
  switch (type) {
    case "muted": {
      return (
        <p className={cn("text-sm text-muted-foreground", className)}>
          {children}
        </p>
      );
    }
    case "sm": {
      return (
        <small className={cn("text-sm font-medium leading-none", className)}>
          {children}
        </small>
      );
    }
    case "lg": {
      return (
        <div className={cn("text-lg font-semibold", className)}>{children}</div>
      );
    }
    case "lead": {
      return (
        <p className={cn("text-xl text-muted-foreground", className)}>
          {children}
        </p>
      );
    }
    case "p": {
      return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
          {children}
        </p>
      );
    }
    case "h4": {
      return (
        <h4
          className={cn(
            "scroll-m-20 text-xl font-semibold tracking-tight",
            className
          )}
        >
          {children}
        </h4>
      );
    }
    case "h3": {
      return (
        <h3
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            className
          )}
        >
          {children}
        </h3>
      );
    }
    case "h2": {
      return (
        <h2
          className={cn(
            "scroll-m-2 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
            className
          )}
        >
          {children}
        </h2>
      );
    }
    case "h1": {
      return (
        <h1
          className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            className
          )}
        >
          {children}
        </h1>
      );
    }
  }
}
