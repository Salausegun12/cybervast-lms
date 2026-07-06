import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  it('renders initials when no src is provided', () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText('JD')).toBeDefined();
  });

  it('renders an image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
    const img = screen.getByRole('img', { name: /User Avatar/i });
    expect(img).toBeDefined();
  });
});
