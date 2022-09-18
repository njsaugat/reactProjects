import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getUsers from './getUsers';
// import { useState } from 'react'

const Users = ({ users, setUsers, searchTerm }) => {
  // const [users,setUsers]=useState([])
  useEffect(() => {
    (async () => {
      if (searchTerm) {
        const usersData = await getUsers(searchTerm);
        setUsers(usersData);
      }
    })();
  }, [searchTerm, setUsers]);
  const renderUsers = users.map((user) => {
    return (
      <div
        className="user p-3 shadow-lg shadow-gray-900 rounded-md flex items-center w-3/5 md:w-1/4 m-3  text-white"
        key={user.id}
      >
        <div className="left w-10 h-10  m-4">
          <img
            src={user.avatar_url}
            alt=""
            srcSet=""
            className="rounded-full"
          />
        </div>
        <div className="right flex flex-col">
          <span className="font-bold text-xl">{user.login}</span>
          <Link to="user" state={{ userLink: user.url }}>
            <span className="text-gray-400 text-sm">Visit Profile</span>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="users flex flex-wrap items-center justify-center w-full gap-5 ">
      {renderUsers}
    </div>
  );
};

export default Users;
