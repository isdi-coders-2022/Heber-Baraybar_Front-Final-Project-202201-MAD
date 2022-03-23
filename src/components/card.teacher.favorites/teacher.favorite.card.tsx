import React from 'react';
import './teacher.favorite.card.scss';

function FavoriteCard(): JSX.Element {
  return (
    <div className="card-favorite">
      <img
        className="card-favorite__img"
        src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/67886185-indischer-abstammung-mann-studio-konzept.webp?alt=media&token=e246bba5-7389-4db3-b297-df7a381ba9d6"
        alt=""
      />
      <div className="card-favorite__name">
        <h3>John Cena</h3>
        <span>🏳</span>
      </div>
      <span className="card-favorite__star">⭐5</span>
      <div className="card-favorite__languages">
        <p>ES,EN</p>
        <span>🗑</span>
      </div>
      <div className="card-favorite__book">
        <button type="submit">Book</button>
      </div>
    </div>
  );
}
export default FavoriteCard;
