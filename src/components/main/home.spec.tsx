import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test.utils';
import Main from './Home';

describe('Given Form component', () => {
  describe('When form is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/fun/i));
    });
  });
});
