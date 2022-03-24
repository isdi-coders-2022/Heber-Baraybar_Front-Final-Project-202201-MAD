import React from 'react';
import './favorites.scss';
import FavoriteCard from '../card.teacher.favorites/teacher.favorite.card';

function Favorites() {
  return (
    <div className="favorite">
      <h2>Your favorites teachers</h2>
      <div className="favorite__card">
        <FavoriteCard />
        <FavoriteCard />
      </div>
      <button type="submit">
        PURCHASE OUR BONUS AND GET ONE CLASS FOR FREE
      </button>
    </div>
  );
}

export default Favorites;
