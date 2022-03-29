import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test.utils.js';

import Works from './how.works';

describe('Given Works component', () => {
  describe('When Works is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <Works />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/meal/i));
    });
  });
});
