import React, { useState } from 'react';

export interface NavItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  active,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
        active
          ? 'bg-[#7B2FBE]/10 text-[#7B2FBE]'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      } ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0 w-5 h-5 flex items-center justify-center">{icon}</span>}
      <span className="truncate">{label}</span>
    </button>
  );
};

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  defaultCollapsed = false,
  className = '',
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <aside
      className={`relative flex flex-col bg-white border-r border-gray-200 transition-all duration-300 h-screen ${
        collapsed ? 'w-20' : 'w-64'
      } ${className}`}
      {...props}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-100 h-16">
        {!collapsed && (
          <span className="font-bold text-[#4A0E8F] text-lg truncate">CyberVast LMS</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors ${collapsed ? 'mx-auto' : ''}`}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`flex-1 overflow-y-auto p-4 flex flex-col gap-2 ${collapsed ? 'items-center' : ''}`}
      >
        {children}
      </div>
    </aside>
  );
};
