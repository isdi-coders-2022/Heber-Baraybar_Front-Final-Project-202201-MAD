import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './booking.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { getTeacher } from '../../services/api';
import TeacherCard from '../teacher.card/teacher.card';
import { teacherI } from '../../iterface/interfaces';

function Booking(): JSX.Element {
  const [teacher, setTeacher] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getTeacher(id as string).then((resp) => {
      console.log(resp.data);
      setTeacher(resp.data);
    });
  }, []);

  return (
    <div className="book">
      <h2 className="book__title">BOOK YOUR CLASS</h2>

      <div className="book__teacher">
        <TeacherCard teacher={teacher as teacherI} />
      </div>

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
        <span>
          <FontAwesomeIcon icon={faCreditCard} />
        </span>
        <span>💳</span>
        <span>💲</span>
      </div>
    </div>
  );
}
export default Booking;
