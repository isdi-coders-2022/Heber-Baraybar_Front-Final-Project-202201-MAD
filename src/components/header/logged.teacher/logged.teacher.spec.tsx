import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { teacherI } from '../../../iterface/interfaces';
import { render, screen } from '../../../utils/test.utils';
import LoggedTeacher from './logged.teacher';

let teacher: teacherI = {
  name: '',
  email: '',
  country: '',
  city: '',
  languages: [],
  image: '',
  video: '',
  comment: '',
  password: '',
  speciality: [],
  price: 0,
  _id: '',
};

describe('Given LoggedTeacher component', () => {
  describe('When LoggedTeacher is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <LoggedTeacher teacher={teacher.name} />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/logout/i));
    });
  });
});
