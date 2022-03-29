import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test.utils.js';

import StudentRegister from './student.register';

describe('Given StudentRegister component', () => {
  describe('When StudentRegister is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <StudentRegister />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/chinese/i));
    });
  });
});
