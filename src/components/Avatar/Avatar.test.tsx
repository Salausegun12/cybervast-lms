import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  it('renders initials when no src is provided', () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders an image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
    const imgs = screen.getAllByRole('img', { name: /User Avatar/i });
    expect(imgs.length).toBeGreaterThan(0);
  });
});
