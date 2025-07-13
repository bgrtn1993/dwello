import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}: ButtonProps) {
  let baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  if (size === "sm") {
    baseStyles += " px-3 py-1.5 text-sm";
  } else if (size === "md") {
    baseStyles += " px-4 py-2 text-base";
  } else if (size === "lg") {
    baseStyles += " px-6 py-3 text-lg";
  }

  if (variant === "primary") {
    baseStyles +=
      " bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500";
  } else if (variant === "secondary") {
    baseStyles +=
      " bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400";
  } else if (variant === "outline") {
    baseStyles +=
      " border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500";
  }

  const combinedClassName = `${baseStyles} ${className || ""}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
