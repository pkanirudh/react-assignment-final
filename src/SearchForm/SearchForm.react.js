import React from 'react';

import './SearchForm.css';
import SearchResultsCopy from '../SearchResultsCopy/SearchResultsCopy.react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            tag: ""
        }
    }
    handleChange = event => {
        let newTag = event.target.value;
        this.setState(prevState => ({tag: newTag}));
    }

    render() {
        return (
            <div className='searchform_wrapper'>
                <h3>StackOverFlow</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  placeholder="Search Terms" onChange={this.handleChange} />
                </form>
                <SearchResultsCopy tag={this.state.tag}/>
            </div>
        );
    }


}

export default SearchForm;