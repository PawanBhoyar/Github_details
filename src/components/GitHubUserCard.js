import React from 'react';

const GitHubUserCard = ({ user }) => {
  return (
    <div className={`flex items-center rounded-md w-90 my-2 mt-8 pt-5 py-5 bg-white text-cyan-500 shadow-lg shadow-cyan-600 p-4 ${user ? 'transform transition-transform duration-200' : ''}`}>
      <div className='flex item-left'>
        <img
          src={user.avatar_url}
          alt="GitHub Avatar"
          className="w-48 h-48 rounded-full mr-2"
        />
      </div>
      <div className="ml-4 flex text-left flex-col text-md space-y-2">
        <h2 className="text-xl font-bold mr-2 text-cyan-600">Name: {user.name || 'N/A'}</h2>
        <p className='text-black'><span className='font-bold text-cyan-800'>Username: </span>{user.login}</p>
        <p className='text-black'><span className='font-bold text-cyan-800'>Number Of Public Repos: </span>{user.public_repos}</p>
        <p className='text-black'><span className='font-bold text-cyan-800'>Number Of Public Gists: </span>{user.public_gists}</p>
        <p className='text-black'><span className='font-bold text-cyan-800'>Profile Created At: </span>{user.created_at}</p>
      </div>
    </div>
  );
};

export default GitHubUserCard;
