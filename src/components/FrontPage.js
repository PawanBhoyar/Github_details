import React, { useState } from 'react';
import GitHubUserCard from './GitHubUserCard';
import axios from 'axios';

function FrontPage() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchGitHubUser = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
      console.log(response.data)
      setError(null); 
    } catch (error) {
      setError('X User not found');
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    return dateString.substring(0, 10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGitHubUser();
  };

  return (
    <div className='flex flex-col text-white text-center mx-10 p-2 items-center'>
      <div>
        <p className='text-lg text-cyan-700'>GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code.</p>
      </div>
      <p className='text-lg text-cyan-700'>Our site helps you find details about the GitHub users. Just put in their Usernames and you are ready to Rock...!!</p>
      <form className="flex my-4" onSubmit={handleSubmit}> 
        <input
          className='mt-5 text-gray-900 border border-cyan-700 text-sm rounded-l-lg block w-full p-2.5'
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className='mt-5 w-24 border border-cyan-700 bg-white h-12 rounded-r-lg text-gray-900' type="submit">
          Get Info
        </button>
      </form>
      {error && <p className="text-red-500 ">{error}</p>}
      {user && (
        <GitHubUserCard
          user={{
            ...user,
            created_at: formatDate(user.created_at)
          }}
        />
      )}
    </div>
  );
}

export default FrontPage;
