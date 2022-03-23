import React from 'react';
import TeacherCard from '../components/teacher.card/teacher.card';

function Book() : JSX.Element {
  return (
    <div className="book">
      <h2>BOOK YOUR CLASS</h2>
      <TeacherCard />
      <span><img src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/calendary.png?alt=media&token=daa9b518-2e01-4f28-89c8-3eee31c24fb9" alt="calendary" /></span>
      <h3>THE SCHEDULLE IS SHOWN IN YOUR LOCAL TIME</h3>
      <div className="book__payment">
        <span>paypal</span>
        <span>visa</span>
        <span>bitcoin</span>
      </div>
    </div>
  );
}
export default Book;
