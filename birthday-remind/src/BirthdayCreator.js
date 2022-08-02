import React from 'react';
import { ReactDOM } from 'react';

// const API_URL = 'https://randomuser.me/api/?results=';
// const LIMIT_USERS = 5;

// async function getUsers() {
//   const users = await fetch(API_URL + LIMIT_USERS, {
//     accept: 'application/json',
//   });
//   const { results } = await users.json();
//   BirthdayGeneratorAll(results);
// }

// getUsers();
// function BirthdayGeneratorAll(users) {
//   users.forEach((user) => {
//     BirthdayGenerator(user);
//   });
// }

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
