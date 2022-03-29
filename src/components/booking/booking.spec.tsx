import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test.utils.js';

import Booking from './booking';

describe('Given Form component', () => {
  describe('When form is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <Booking />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/BOOK/i));
    });
  });
});
