import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import UserHeader from './UserHeader';
import getUser from './getUser';
import { useEffect } from 'react';
import SocialProfile from './SocialProfile';
import UserRepos from './UserRepos';

const ContainerUserProfile = () => {
  const { state } = useLocation();
  const { userLink } = state;
  console.log(userLink);
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const usersData = await getUser(userLink);
      setUser(usersData);
    })();
  }, [userLink]);
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b text-slate-100 from-gray-600 to-slate-700 w-screen min-h-screen p-10">
        <UserHeader user={user} />
        <SocialProfile user={user} />
        <UserRepos userLink={userLink} />
      </div>
    </>
  );
};

export default ContainerUserProfile;
