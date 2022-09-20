import React, { useState } from 'react';
import { useEffect } from 'react';
import getUser from './getUser';
//add icons
import {
  faEye,
  faInfo,
  faLink,
  faStar,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const eyeIcon = <FontAwesomeIcon icon={faEye} />;
const starIcon = <FontAwesomeIcon icon={faStar} />;
const infoIcon = <FontAwesomeIcon icon={faInfo} />;
const forkIcon = <FontAwesomeIcon icon={faUtensils} />;
const linkIcon = <FontAwesomeIcon icon={faLink} />;

const UserRepos = ({ userLink }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    (async () => {
      const usersData = await getUser(`${userLink}/repos`);
      setRepos(usersData);
    })();
  }, [userLink]);

  const renderRepos = repos.map((repo) => {
    return (
      <div
        className="flex flex-col bg-slate-700 transition-all hover:bg-slate-800 shadow-lg p-5 m-5 md:m-10 gap-2 rounded-lg w-11/12 md:w-9/12 shadow-gray-900"
        key={repo.id}
      >
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <h3 className="tracking-wider">
            {linkIcon} {repo.name}
          </h3>
        </a>
        <section className="leading-6 md:leading-7">{repo.description}</section>
        <div className="flex gap-10">
          <span className="text-sky-300 bg-black bg-opacity-20 px-3 rounded-lg flex items-center ">
            <span className="mr-2">{eyeIcon}</span> {repo.watchers}
          </span>
          <span className="text-green-400 bg-black bg-opacity-20 px-3 rounded-lg flex items-center ">
            <span className="mr-2">{starIcon}</span> {repo.stargazers_count}
          </span>
          <span className="text-pink-300 bg-black bg-opacity-20 px-3 rounded-lg flex items-center ">
            <span className="mr-2">{infoIcon}</span> {repo.open_issues_count}
          </span>
          <span className="text-yellow-300 bg-black bg-opacity-20 px-3 rounded-lg flex items-center ">
            <span className="mr-2">{forkIcon}</span> {repo.forks}
          </span>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl">Latest Repositories</h1>
      {renderRepos}
    </div>
  );
};

export default UserRepos;
