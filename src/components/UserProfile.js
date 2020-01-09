import React from 'react';
import { connect } from 'react-redux';
import { startSetProfile } from '../actions/profile';

class UserProfile extends React.Component{
    componentDidMount(){
        this.props.startSetProfile();
    }
    render(){
        return(
            <div className="profileContainer">
                <img 
                    src={this.props.profile.avatar_url}
                    alt="profile-pic"
                    />
                <div className="titles_black">{this.props.profile.name}</div>
                <div className="subTitles">{this.props.profile.login}</div>
                <div className="text_small">{this.props.profile.bio}</div>
                <button>Edit bio</button>
                <div className="text_small">{this.props.profile.company}</div>
                <div className="text_small">{this.props.profile.location}</div>
                <div className="text_small">{this.props.profile.email}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

const mapDispatchToProps = (dispatch, props) => ({
    startSetProfile: () => dispatch(startSetProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
