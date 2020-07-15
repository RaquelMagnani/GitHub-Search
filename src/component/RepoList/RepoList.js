import React from "react";

const RepoList = ({ repos, users }) => {
  return (
    <div>
        <img src={users.avatar_url} ></img>
        <p>Repos{users.public_repos}</p>
        <p>Following{users.following}</p>
        <p>Followers:{users.followers}</p>
      <p>{users.login}</p>
      {repos.map((repo) => (
        <p>{repo.name}</p>
      ))}
    </div>
  );
};

export default RepoList;
