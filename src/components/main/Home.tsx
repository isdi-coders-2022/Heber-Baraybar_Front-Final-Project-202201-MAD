import React from 'react';
import './Home.scss';
import Works from '../works/how.works';
import TeacherCard from '../teacher.card/teacher.card';
import ButtonMeet from '../button.meetOurChef/button.meet.our.chefs';

function Main(): JSX.Element {
  return (
    <div className="main">
      <span className="main__friends"><img src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/amigos-cocinando-3.jpg?alt=media&token=5b1913f9-1b18-4215-8aea-c2e030ed46fa" alt="" /></span>
      <h1>Have fun and learn with native cooks</h1>
      <Works />
      <div className="teacher-presentation">

        <TeacherCard />
        <span className="calendary"><img src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/calendary.png?alt=media&token=daa9b518-2e01-4f28-89c8-3eee31c24fb9" alt="" /></span>

      </div>
      <span className="main__couple"><img src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/online-couple.jpg?alt=media&token=62d5ce97-65fd-4298-94ac-3e90e2f3e69c" alt="" /></span>
      <ButtonMeet />

    </div>

  );
}
export default Main;
