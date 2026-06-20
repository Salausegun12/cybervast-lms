import React, { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "warning" | "error" | "info" | "neutral";
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "neutral",
  className,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  
  const variants = {
    success: "bg-green-100 text-green-700 border border-green-200",
    warning: "bg-amber-100 text-amber-700 border border-amber-200",
    error: "bg-red-100 text-red-700 border border-red-200",
    info: "bg-blue-100 text-blue-700 border border-blue-200",
    neutral: "bg-gray-100 text-gray-700 border border-gray-200",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className || ""}`} {...props}>
      {children}
    </span>
  );
};
