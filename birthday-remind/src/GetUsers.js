import React from 'react';
import { useState, useEffect } from 'react';

const API_URL = 'https://randomuser.me/api/?results=';
const LIMIT_USERS = 5;

function GetUsers() {
  const [users, getUsers] = useState([]);
  const [users_total, setTotalUsers] = useState(LIMIT_USERS);

  const fetchUser = async () => {
    const data = await fetch(API_URL + LIMIT_USERS);
    const res = await data.json();
    getUsers(res.results);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h2>{users_total} Birthdays today</h2>
      {users.map((user, index) => {
        return (
          <div className="person" key={index}>
            <div
              className="left image"
              style={{ backgroundImage: `url(${user.picture.large})` }}
            ></div>
            <div className="right">
              <div className="name">
                {user.name.first} {user.name.last}
              </div>
              <div className="age">{user.dob.age} years</div>
            </div>
          </div>
        );
      })}
      <button
        type="text"
        className="btn"
        onClick={() => {
          getUsers([]);
          setTotalUsers(0);
        }}
      >
        Clear All
      </button>
    </>
  );
}

export default GetUsers;
