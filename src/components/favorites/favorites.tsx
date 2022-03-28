import React, { useEffect, useState } from 'react';
import './favorites.scss';
import { useSelector } from 'react-redux';
import FavoriteCard from '../card.teacher.favorites/teacher.favorite.card';
import { teacherI } from '../../iterface/interfaces';
import { getStudent } from '../../services/api';
import { RootState } from '../../redux/store/store';

function Favorites(): JSX.Element {
  const [favorites, setFavorites] = useState([]);
  const student = useSelector((state: RootState) => state.student);

  useEffect(() => {
    getStudent(student.id as string).then((resp) => {
      console.log('api resp', resp.data);
      console.log('estado', student);

      setFavorites(resp.data.favorites);
    });
  }, []);

  return (
    <div className="favorite">
      <h2>Your favorites teachers</h2>
      <div className="favorite__card">
        {favorites.map((item: any) => (
          <FavoriteCard teacher={item as teacherI} />
        ))}
      </div>
      <button type="submit">
        PURCHASE OUR BONUS AND GET ONE CLASS FOR FREE
      </button>
    </div>
  );
}

export default Favorites;
