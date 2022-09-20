import React from 'react';

const UserHeader = ({ user }) => {
  const { location, blog, twitter_username } = user;
  const userInfo = [
    {
      title: 'location',
      location: location,
    },
    {
      title: 'website',
      website: blog,
    },
    {
      title: 'twitter',
      twitter: twitter_username,
    },
  ];

  const renderUserInfo = userInfo.map((info, index) => {
    return (
      <div
        key={index}
        className=" p-3 shadow-lg shadow-gray-900 rounded-md flex flex-col items-center w-3/5 md:w-1/4 m-3  text-white"
      >
        <span className="text-gray-400 text-sm capitalize">{info.title}</span>
        <span className="font-bold text-xl">{info[info.title]}</span>
      </div>
    );
  });
  return (
    <div className="header flex flex-col lg:flex-row gap-10 items-center w-full justify-center  ">
      <div className="left ">
        <img
          src={user.avatar_url}
          alt=""
          srcSet=""
          className="rounded-md  w-72 h-72"
        />
      </div>
      <div className="right">
        <div className="title flex gap-5 items-center my-5 ">
          <h1 className="font-bold text-2xl ">{user.name}</h1>
          <span className="text-green-400 bg-black bg-opacity-20 px-3 rounded-lg">
            {user.type}
          </span>
          {user.hireable && (
            <span className="text-sky-300 bg-black bg-opacity-20 px-3 rounded-lg">
              Hireable
            </span>
          )}
        </div>
        <section className="leading-6 tracking-wide mb-10">{user.bio}</section>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-2 uppercase tracking-wide border-white border-2 rounded-md "
        >
          Visit Github Profile
        </a>

        <div className="userInfo flex flex-wrap justify-center items-center my-10 self-center">
          {renderUserInfo}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
