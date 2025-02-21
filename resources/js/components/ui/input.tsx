import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-950 placeholder:text-gray-500 focus:border-transparent focus:ring-1 focus:ring-rose-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:file:text-gray-50 dark:placeholder:text-gray-400 dark:focus:ring-rose-600 dark:bg-background",
                className
            )}
            autoComplete="off"
            autoFocus={false}
            ref={ref}
            {...props}
        />
    )
  }
)
Input.displayName = "Input"

export { Input }
