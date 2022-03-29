import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { teacherI } from '../../iterface/interfaces.js';
import { render, screen } from '../../utils/test.utils.js';

import teacherRegister from './teacher.register';

let teacher: teacherI = {
  name: '',
  email: '',
  country: '',
  city: '',
  languages: [],
  image: '',
  video: '',

  password: '',
  speciality: [],
  price: 0,
  _id: '',
  comment: '',
};

describe('Given teacherRegister component', () => {
  describe('When teacherRegister is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <teacherRegister />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/india/i));
    });
  });
});
