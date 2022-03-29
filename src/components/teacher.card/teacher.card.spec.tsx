import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '../../utils/test.utils';
import teacherRegister from '../teacher.register/teacher.register';

import TeacherCard from './teacher.card';

describe('Given Form component', () => {
  const teacher = {
    name: 'heber',
  };
  describe('When form is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <TeacherCard teacher={teacher} />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/Book/i));
    });
  });
});
