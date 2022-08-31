import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import getUsers from './getUsers';
import ShowPage from './ShowPage';
import ShowUser from './ShowUser';
const USERS_PER_PAGE = 10;

const getUsersPerPage = (totalUsers) => totalUsers / USERS_PER_PAGE;

const getArrayofPages = (totalPages) => {
  return Array.from(Array(totalPages).keys());
};

export default function ShowUsers() {
  const [users, setUsers] = useState([]);
  const [pagingationArr, setPaginationArr] = useState([]);
  const [selectedPage, setPageNumber] = useState(1);

  function returnIndexRange(index) {
    return (
      index < selectedPage * USERS_PER_PAGE &&
      index >= (selectedPage - 1) * USERS_PER_PAGE
    );
  }
  console.log(selectedPage);
  useState(() => {
    (async () => {
      const userData = await getUsers();
      setUsers(userData);
      const totalPages = getUsersPerPage(userData.length);
      setPaginationArr(getArrayofPages(totalPages));
    })();
  }, [users]);
  if (users === null || users.length === 0) {
    return <div className="loader"></div>;
  }
  return (
    <div className="container">
      <h1>Pagination</h1>
      <div className="underline"></div>

      <div className="users">
        {users.map((user, index) => {
          return returnIndexRange(index) && <ShowUser user={user} />;
        })}
      </div>
      <div className="pagination">
        <span
          className="prev"
          onClick={() => {
            if (selectedPage === 1) {
              return setPageNumber(pagingationArr.length);
            }
            setPageNumber((prevPage) => prevPage - 1);
          }}
        >
          Prev
        </span>
        {pagingationArr.map((page, index) => {
          return (
            <Link to={`/page/${index + 1}`}>
              <ShowPage
                page={page}
                index={index}
                selectedPage={selectedPage}
                setPageNumber={setPageNumber}
              />
            </Link>
          );
        })}
        <span
          className="next"
          onClick={() => {
            if (selectedPage === pagingationArr.length) {
              return setPageNumber(1);
            }
            setPageNumber((prevPage) => prevPage + 1);
          }}
        >
          Next
        </span>
      </div>
    </div>
  );
}
