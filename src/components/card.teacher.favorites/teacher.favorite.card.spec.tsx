import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { teacherI } from '../../iterface/interfaces.js';
import { render, screen } from '../../utils/test.utils.js';

import FavoriteCard from './teacher.favorite.card';
let teacher: teacherI = {
  name: '',
  email: '',
  country: '',
  city: '',
  languages: [],
  speciality: [],
  price: 0,
  image: '',
  video: '',
  comment: '',
  password: '',
  _id: '',
};

describe('Given FavoriteCard component', () => {
  describe('When FavoriteCard is submitted', () => {
    test('should be rendered', async () => {
      render(
        <MemoryRouter>
          <FavoriteCard
            teacher={teacher}
            remove={function (teacher: teacherI): void {
              throw new Error('Function not implemented.');
            }}
          />
        </MemoryRouter>
      );

      expect(screen.getAllByText(/book/i));
    });
  });
});
