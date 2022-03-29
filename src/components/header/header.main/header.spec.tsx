import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../utils/test.utils';

import Header from './header';

describe('Given Header component', () => {
  describe('When Header is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/learn/i));
    });
  });
});
