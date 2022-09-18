import {
  faBoxesPacking,
  faStore,
  faUserGroup,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const followersIcon = <FontAwesomeIcon icon={faUsers} />;
const followingIcon = <FontAwesomeIcon icon={faUserGroup} />;
const reposIcon = <FontAwesomeIcon icon={faBoxesPacking} />;
const storeIcon = <FontAwesomeIcon icon={faStore} />;

const SocialProfile = ({ user }) => {
  const { followers, following, public_repos, public_gists } = user;
  const socialProfile = [
    {
      icon: followersIcon,
      title: 'followers',
      followers,
    },
    {
      icon: followingIcon,
      title: 'following',
      following,
    },
    {
      icon: reposIcon,
      title: 'public_repos',
      public_repos,
    },
    {
      icon: storeIcon,
      title: 'public_gists',
      public_gists,
    },
  ];

  const renderSocialProfile = socialProfile.map((profile, index) => {
    return (
      <div
        className="flex justify-between items-center w-1/3 md:w-1/6  p-3 md:px-5 shadow-lg shadow-gray-900 rounded-md"
        key={index}
      >
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm capitalize">
            {profile.title.replaceAll('_', ' ')}
          </span>
          <span className="text-3xl md:text-4xl font-bold">
            {profile[profile.title]}
          </span>
        </div>

        <span className=" text-xl md:text-2xl text-pink-400">
          {profile.icon}
        </span>
      </div>
    );
  });
  return (
    <div className="flex flex-wrap items-center w-full  justify-center gap-10 my-10">
      {renderSocialProfile}
    </div>
  );
};

export default SocialProfile;
