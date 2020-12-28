import React, { Component } from 'react';
import '../index.css';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = e => {
        this.setState({term: e.target.value});
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() { 
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="ui icon input">
                            <input 
                                type="text" 
                                placeholder="Video Search..." 
                                value={this.state.term}
                                onChange={this.onInputChange} 
                            />
                            <i className="inverted circular search link icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;