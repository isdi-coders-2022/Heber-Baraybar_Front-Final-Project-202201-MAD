import React from 'react';
import TeacherCard from '../teacher.card/teacher.card';

function Teachers(): JSX.Element {
  return (
    <div>
      <h2>Meet our teachers</h2>
      <TeacherCard />
      <span><button type="submit">Your Teachers</button></span>

    </div>

  );
}
export default Teachers;
