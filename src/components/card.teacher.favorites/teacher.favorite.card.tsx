import React from 'react';
import './teacher.favorite.card.scss';

function FavoriteCard() :JSX.Element {
  return (
    <div className="card-favorite">
      <img className="card-favorite__img" src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/67886185-indischer-abstammung-mann-studio-konzept.webp?alt=media&token=e246bba5-7389-4db3-b297-df7a381ba9d6" alt="" />
      <div className="form-favorite__name">
        <h2>Concha</h2>
        <span>flag</span>
      </div>
      <div className="form-favorite__languages">
        <p>ES, EN</p>
        <span>*</span>
      </div>
      <div className="form-favorite__book">
        <button type="submit">Book</button>
        <span>trash</span>
      </div>

    </div>

  );
}
