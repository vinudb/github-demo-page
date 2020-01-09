import React from 'react';
import RepoListItem from './RepoListItem';
import { connect } from 'react-redux';
import selectRepos from '../selectors/repos';

class RepoListView extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.repository.map((repo, index)=>{
                        return(
                            <RepoListItem key={index} repo={repo}/>
                        );
                    })
                }
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      repository: selectRepos(state.repository, state.filter)
    };
  };
  
  export default connect(mapStateToProps)(RepoListView);