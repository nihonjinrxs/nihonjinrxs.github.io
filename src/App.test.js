import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  screen.getAllByText('').forEach(e => expect(e).toBeInTheDocument());
});
