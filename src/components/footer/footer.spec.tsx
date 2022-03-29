import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test.utils.js';

import Footer from './footer';

describe('Given Footer component', () => {
  describe('When Footer is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/works/i));
    });
  });
});
