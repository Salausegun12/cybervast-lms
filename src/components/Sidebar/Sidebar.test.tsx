import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar, NavItem } from './Sidebar';

describe('Sidebar Component', () => {
  it('renders title when expanded', () => {
    render(
      <Sidebar>
        <NavItem label="Dashboard" />
      </Sidebar>
    );
    expect(screen.getByText('CyberVast LMS')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('toggles sidebar on button click', () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByRole('button', { name: /collapse sidebar/i });
    fireEvent.click(toggleBtn);
    // When collapsed, title is hidden
    expect(screen.queryByText('CyberVast LMS')).not.toBeInTheDocument();
  });
});
