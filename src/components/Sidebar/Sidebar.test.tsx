import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar, NavItem } from './Sidebar';

describe('Sidebar Component', () => {
  it('renders correctly and toggles collapse state', () => {
    render(
      <Sidebar>
        <NavItem label="Dashboard" />
      </Sidebar>
    );
    expect(screen.getByText('CyberVast LMS')).toBeDefined();
    expect(screen.getByText('Dashboard')).toBeDefined();
    
    const toggleBtn = screen.getByRole('button', { name: /collapse/i });
    fireEvent.click(toggleBtn);
    
    // Title should be hidden when collapsed
    expect(screen.queryByText('CyberVast LMS')).toBeNull();
  });
});
