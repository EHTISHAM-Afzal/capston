import * as React from 'react';
import Tester from './tester';
import { render , screen} from '@testing-library/react';
import { expect } from 'vitest';

describe('App', () => {
  it('renders App component', () => {
    render(<Tester />);
    screen.debug();
    
  });

  it('Search for Seach: in document', () => {
  render(<Tester />);
  expect(screen.getByText(/Search:/)).toBeInTheDocument()
  screen.debug()
});

});