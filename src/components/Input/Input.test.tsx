import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders correctly', () => {
    render(<Input label="Test Input" placeholder="Enter text" />);
    expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<Input error="This is an error" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });
});
