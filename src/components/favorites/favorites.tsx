import React, { useEffect, useState } from 'react';
import './favorites.scss';
import FavoriteCard from '../card.teacher.favorites/teacher.favorite.card';
import { getAllTeachers } from '../../services/api';

function Favorites() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getAllTeachers().then((resp) => {
      console.log(resp.data);
      setTeachers(resp.data);
    });
  }, []);

  return (
    <div className="favorite">
      <h2>Your favorites teachers</h2>
      <div className="favorite__card">
        {teachers.map((item) => (
          <FavoriteCard teacher={item} />
        ))}
      </div>
      <button type="submit">
        PURCHASE OUR BONUS AND GET ONE CLASS FOR FREE
      </button>
    </div>
  );
}

export default Favorites;
