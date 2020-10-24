import React from 'react';
import { render, screen } from '@testing-library/react';
import ResumeSite from './ResumeSite';
import resume from '../../public/resume.json';

test('renders learn react link', () => {
  render(<ResumeSite resume={resume} />);
  expect(screen.getByText('Ryan Bensussan Harvey')).toBeInTheDocument();
});
