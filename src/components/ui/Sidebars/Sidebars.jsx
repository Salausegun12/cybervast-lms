'use client';

import { useState } from 'react';
import NavItem from '../NavItem';

export default function Sidebars() {
  const [active, setActive] = useState('Dashboard');

  const navItems = [
    {
      icon: '🏠',
      label: 'Dashboard',
    },
    {
      icon: '📚',
      label: 'Courses',
    },
    {
      icon: '🎓',
      label: 'Students',
    },
    { icon: '📝', label: 'Assignments' },
    {
      icon: '⚙️',
      label: 'Settings',
    },
  ];

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r p-4">
      <h1 className="mb-8 text-2xl font-bold">CyberVast LMS</h1>
      <div className="space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}
      </div>
    </aside>
  );
}
