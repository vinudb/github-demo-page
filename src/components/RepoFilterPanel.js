import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setLanguage, setType } from '../actions/filter';
class RepoFilterPanel extends React.Component {
    type = [];
    language=[];
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onLanguageChange = (e) => {
        this.props.setLanguage(e.target.value)
    }

    onTypeChange = (e) => {
        this.props.setType(e.target.value)
    }

    render() {
        return (
            <div className="filterContainer">
                <input 
                    className="text-input" 
                    placeholder="Search Repository" 
                    type="text" 
                    value={this.props.filter.text} 
                    onChange={this.onTextChange} />
                <select className="select" value={this.props.filter.type} onChange={this.onTypeChange}>
                    <option value="">Type</option>
                    {
                        this.type = this.props.repository.length > 0 &&
                        [... new Set(this.props.repository.map((repo) => repo.owner.type))]
                    }
                    {
                        this.props.repository.length > 0 && this.type.map((type, index) =>
                            <option value={type} key={index}>{type}</option>
                        )
                    }
                </select>
                <select className="select" value={this.props.filter.language} onChange={this.onLanguageChange}>
                    <option value="">Language</option>
                    {
                        this.language = this.props.repository.length > 0 &&
                        [... new Set(this.props.repository.map((repo) => repo.language))]
                    }
                    {
                        this.props.repository.length > 0 && this.language.map((language,index) =>
                            <option value={language} key={index}>{language}</option>
                        )
                    }
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filter: state.filter,
    repository: state.repository
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setLanguage: (language) => dispatch(setLanguage(language)),
    setType: (type) => dispatch(setType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoFilterPanel);