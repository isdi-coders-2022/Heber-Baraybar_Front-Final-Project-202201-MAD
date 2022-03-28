import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './favorites.scss';
import FavoriteCard from '../card.teacher.favorites/teacher.favorite.card';
// import { teacherI } from '../../iterface/interfaces';
import { addFavorites } from '../../services/api';

function Favorites(): JSX.Element {
  const [teacher, setTeacher] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    addFavorites(id as string).then((resp) => {
      console.log(resp.data);
      setTeacher(resp.data);
    });
  }, []);

  return (
    <div className="favorite">
      <h2>Your favorites teachers</h2>
      <div className="favorite__card">
        <FavoriteCard teacher={teacher} />
      </div>
      <button type="submit">
        PURCHASE OUR BONUS AND GET ONE CLASS FOR FREE
      </button>
    </div>
  );
}

export default Favorites;
