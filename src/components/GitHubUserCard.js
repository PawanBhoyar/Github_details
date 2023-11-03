// GitHubUserCard.js

import React from 'react';

const GitHubUserCard = ({ user }) => {
  return (
    <div>
      <img
        src={user.avatar_url}
        alt="GitHub Avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h2 className="text-xl font-bold text-center mt-4">{user.login}</h2>
      <p className="text-center mt-2">Name: {user.name || 'N/A'}</p>
      <p className="text-center">Public Repos: {user.public_repos}</p>
      <p className="text-center">Public Gists: {user.public_gists}</p>
      <p className="text-center">
        Profile Created At: {new Date(user.created_at).toLocaleDateString()}
      </p>
    </div>
  );
};

export default GitHubUserCard;
