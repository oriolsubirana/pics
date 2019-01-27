import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },    
        headers: {
                Authorization: 
                'Client-ID bbf9f2c61e68c21e20036689ace35275a3198e5514291b037b79cfec5750f0f2'
            }
        });    
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />            
            </div>
        );
    }
}

export default App;