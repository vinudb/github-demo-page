import React from 'react';

class RepoListItem extends React.Component{
    render(){
        return(
            <div className="listItem">
                <div className="repoTitle">{this.props.repo.name}</div>    
                <div className="subTitles">{this.props.repo.language}</div>
                <div className="subTitles">Updated on {this.props.repo.updated_at}</div>    
            </div>
        );
    }
}

export default RepoListItem;