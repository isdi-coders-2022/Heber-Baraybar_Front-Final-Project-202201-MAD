import React from 'react';
import TeacherCard from '../teacher.card/teacher.card';
import './book.scss';

function Book(): JSX.Element {
  return (
    <div className="book">
      <h2 className="book__title">BOOK YOUR CLASS</h2>
      <span className="book__teacher">
        <TeacherCard />
      </span>

      <h3 className="book__title-calendary">
        THE SCHEDULLE IS SHOWN IN YOUR LOCAL TIME
      </h3>
      <span className="book__calendary">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/calendary.png?alt=media&token=daa9b518-2e01-4f28-89c8-3eee31c24fb9"
          alt="calendary"
        />
      </span>

      <div className="book__payment">
        <span>💰</span>
        <span>💳</span>
        <span>💲</span>
      </div>
    </div>
  );
}
export default Book;
