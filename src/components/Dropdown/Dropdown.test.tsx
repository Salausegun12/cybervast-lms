import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

describe('Dropdown Component', () => {
  it('renders placeholder initially', () => {
    render(<Dropdown options={options} placeholder="Select item" />);
    expect(screen.getByText('Select item')).toBeInTheDocument();
  });

  it('opens options on click', () => {
    render(<Dropdown options={options} placeholder="Select item" />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
