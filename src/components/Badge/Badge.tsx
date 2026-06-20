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
    success: "bg-[var(--success-color,#22c55e)] bg-opacity-20 text-[var(--success-color,#22c55e)] border border-[var(--success-color,#22c55e)]",
    warning: "bg-[var(--warning-color,#f59e0b)] bg-opacity-20 text-[var(--warning-color,#f59e0b)] border border-[var(--warning-color,#f59e0b)]",
    error: "bg-[var(--danger-color,#ef4444)] bg-opacity-20 text-[var(--danger-color,#ef4444)] border border-[var(--danger-color,#ef4444)]",
    info: "bg-[var(--info-color,#3b82f6)] bg-opacity-20 text-[var(--info-color,#3b82f6)] border border-[var(--info-color,#3b82f6)]",
    neutral: "bg-gray-100 text-gray-800 border border-gray-300",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className || ""}`} {...props}>
      {children}
    </span>
  );
};
