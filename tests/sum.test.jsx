import * as React from 'react';
import Tester from './tester';
import { render , screen} from '@testing-library/react';

describe('App', () => {
  it('renders App component', () => {
    render(<Tester />);
    screen.debug();
  })

});