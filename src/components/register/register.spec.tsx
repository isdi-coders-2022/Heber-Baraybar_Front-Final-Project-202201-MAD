import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test.utils.js';

import Register from './register';

describe('Given Register component', () => {
  describe('When Register is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      );

      expect(screen.getByRole());
    });
  });
});
