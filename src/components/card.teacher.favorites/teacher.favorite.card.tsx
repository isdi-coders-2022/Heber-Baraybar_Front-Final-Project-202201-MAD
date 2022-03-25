import React from 'react';
import './teacher.favorite.card.scss';

function FavoriteCard({ teacher }: { teacher: any }): JSX.Element {
  return (
    <div className="card-favorite">
      <img className="card-favorite__img" src={teacher.image} alt="" />
      <div className="card-favorite__name">
        <h3>{teacher.name}</h3>
        <span>🏳</span>
      </div>
      <span className="card-favorite__star">⭐5</span>
      <div className="card-favorite__languages">
        <p>{teacher.languages.map((item: { item: any }) => `${item} `)}</p>
        <span>🗑</span>
      </div>
      <div className="card-favorite__book">
        <button type="submit">Book</button>
      </div>
    </div>
  );
}
export default FavoriteCard;
