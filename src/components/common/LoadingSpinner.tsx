import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  color = "text-blue-500",
  className = "",
}: LoadingSpinnerProps) {
  let spinnerSizeClasses = "";
  let borderWidth = "border-4";

  switch (size) {
    case "sm":
      spinnerSizeClasses = "w-6 h-6";
      borderWidth = "border-2";
      break;
    case "md":
      spinnerSizeClasses = "w-10 h-10";
      borderWidth = "border-4";
      break;
    case "lg":
      spinnerSizeClasses = "w-16 h-16";
      borderWidth = "border-8";
      break;
  }

  return (
    <div
      className={`inline-block animate-spin rounded-full ${spinnerSizeClasses} ${borderWidth} border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${color} ${className}`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Yükleniyor...
      </span>
    </div>
  );
}
