import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        event.target.value
    }
    render() {
        return (
            <div class="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;