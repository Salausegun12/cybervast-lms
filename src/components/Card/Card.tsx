import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Generic card shell used as the base for course cards, lesson cards, and dashboard tiles.
 */
export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-6 py-5 border-b border-gray-50/50 flex flex-col gap-1 ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-6 py-5 ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-6 py-4 bg-gray-50/50 flex items-center justify-between ${className}`} {...props}>
      {children}
    </div>
  );
};
