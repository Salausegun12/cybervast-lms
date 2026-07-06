'use client';

import React, { useState } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback initials if image fails or is absent (max 2 characters) */
  initials?: string;
  /** Size of the avatar */
  size?: AvatarSize;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'w-8 h-8 text-xs ring-1',
  sm: 'w-10 h-10 text-sm ring-2',
  md: 'w-14 h-14 text-base ring-2',
  lg: 'w-20 h-20 text-xl ring-4',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'User Avatar',
  initials,
  size = 'md',
  className = '',
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  // Fallback styling with brand colours from spec: Primary #7B2FBE
  const baseClasses =
    'relative inline-flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-[#7B2FBE]/10 to-[#4A0E8F]/20 text-[#7B2FBE] font-semibold shrink-0 ring-white shadow-sm transition-transform hover:scale-105 duration-300';
  const sizeClass = sizeClasses[size];

  const displayInitials = initials ? initials.slice(0, 2).toUpperCase() : '?';

  return (
    <div
      className={`${baseClasses} ${sizeClass} ${className}`}
      {...props}
      role="img"
      aria-label={alt}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span>{displayInitials}</span>
      )}
    </div>
  );
};
