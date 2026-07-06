import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar Component', () => {
  it('renders with label by default', () => {
    render(<ProgressBar progress={50} />);
    expect(screen.getByText('Progress')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('hides label when showLabel is false', () => {
    render(<ProgressBar progress={50} showLabel={false} />);
    expect(screen.queryByText('Progress')).not.toBeInTheDocument();
  });
});
