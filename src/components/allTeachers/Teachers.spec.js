import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test.utils.js';

import Teachers from './Teachers';

describe('Given Form component', () => {
  describe('When form is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <Teachers />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/meet/i));
    });
  });
});
