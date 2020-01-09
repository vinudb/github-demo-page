import React from 'react';
import UserProfile from './UserProfile';
import RespositoryContainer from './RepositoryContainer';

class GithubApp extends React.Component{
    render(){
        return(
            <div className="githubContainer">
                <UserProfile />
                <RespositoryContainer />
            </div>
        );
    }
}

export default GithubApp;