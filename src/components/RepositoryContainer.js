import React from 'react';
import RepoHeader from './RepoHeader';
import RepoFilterPanel from './RepoFilterPanel';
import RepoListView from './RepoListview';
import { connect } from 'react-redux';
import { startSetRepos } from '../actions/respository';

class RespositoryContainer extends React.Component{

    componentDidMount(){
        this.props.startSetRepos();
    }

    render(){
        return(
            <div className="repositoryContainer">
                <RepoHeader />
                <RepoFilterPanel />
                <RepoListView />    
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    repository: state.repository
});

const mapDispatchToProps = (dispatch, props) => ({
    startSetRepos: () => dispatch(startSetRepos())
});

export default connect(mapStateToProps, mapDispatchToProps)(RespositoryContainer);