import React from 'react';
import { ReactDOM } from 'react';

function BirthdayGenerator(user) {
  return (
    <div className="people">
      <div className="person">
        <div
          className="left image"
          style={{ backgroundImage: `url(${user.picture})` }}
        ></div>
        <div className="right">
          <div className="name">
            {user.name.first} {user.name.last}
          </div>
          <div className="age">{user.dob.age} years</div>
        </div>
      </div>
    </div>
  );
}

export default BirthdayGenerator;
