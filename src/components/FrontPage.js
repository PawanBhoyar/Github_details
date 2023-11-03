import React, { useState } from 'react';
import GitHubUserCard from './GitHubUserCard'; // Make sure to import your GitHubUserCard component
import axios from 'axios';

function FrontPage() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const fetchGitHubUser = async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div>
      <h1>GitHub User Information</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchGitHubUser();
        }}
      >
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Get Info</button>
      </form>
      {user && <GitHubUserCard user={user} />}
    </div>
  );
}

export default FrontPage;
