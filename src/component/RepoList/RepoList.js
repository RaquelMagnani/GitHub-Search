import React from 'react';

const RepoList=({repos})=>(
    <div>
        {
            repos.map(repo=>(
            <p>{repo.name}</p>
            ))
        }
    </div>
)

export default RepoList;