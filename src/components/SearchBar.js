import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    //para que no refresque la pagina al dar intro
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

     render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({term : this.onInputChange})}
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;