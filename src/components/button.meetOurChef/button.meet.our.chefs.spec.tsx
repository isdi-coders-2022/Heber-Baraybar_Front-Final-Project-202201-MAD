import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test.utils.js';

import ButtonMeet from './button.meet.our.chefs';

describe('Given Form component', () => {
  describe('When form is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <ButtonMeet />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/meet/i));
    });
  });
});
