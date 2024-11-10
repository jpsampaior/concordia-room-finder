import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center border border-dark-500 bg-dark-400 rounded-lg",
          className
        )}
      >
        {/* The icon will be positioned inside the wrapper */}
        <div className="mx-2">{children}</div>
        <input
          type={type}
          className="text-zinc-300 shad-input border-0 flex h-10 w-full px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
