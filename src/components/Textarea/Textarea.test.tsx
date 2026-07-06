import React from 'react';
import { render, screen } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea Component', () => {
  it('renders correctly', () => {
    render(<Textarea label="Test Textarea" placeholder="Enter text" />);
    expect(screen.getByLabelText('Test Textarea')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(<Textarea helperText="Help info" />);
    expect(screen.getByText('Help info')).toBeInTheDocument();
  });
});
