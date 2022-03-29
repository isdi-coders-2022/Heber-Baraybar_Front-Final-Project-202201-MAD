import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { studentI } from '../../../iterface/interfaces';
import { render, screen } from '../../../utils/test.utils';
import LoggedStudent from './logged.student';

let student: studentI = {
  name: '',
  email: '',
  country: '',
  city: '',
  languages: [],
  image: '',
  video: '',
  comment: '',
  password: '',
};

describe('Given LoggedStudent component', () => {
  describe('When LoggedStudent is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <LoggedStudent student={student.name} />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/logout/i));
    });
  });
});
