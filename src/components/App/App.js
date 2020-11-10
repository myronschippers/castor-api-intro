import React, { Component } from 'react';
import './App.css';

// CUSTOM COMPONENTS
import Header from '../Header/Header';
import Axios from 'axios';

const apiKey = 'XSuWA8pcf51tUzZuSektOtgaKbbzk50M';
const giphySearch = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=5`;

class App extends Component {
  state = {
    searchTerm: '',
    images: [],
  };

  componentDidMount() {
    // component did mount
    this.getSearch();
  }

  getSearch(searchText) {
    Axios.get(`${giphySearch}&q=${searchText}`)
      .then((response) => {
        console.log('giphy:', response.data.data);
        this.setState({
          images: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert('Oh Shoot, I burnt the toast!');
      });
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleClickSearch = (event) => {
    this.getSearch(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <h2>More Content</h2>
          <div>
            <label>
              <span>GIPHY: </span>
              <input
                type="text"
                placeholder="Enter search term"
                onChange={this.handleSearchChange}
              />
            </label>
            <button onClick={this.handleClickSearch}>Search</button>
          </div>
          <pre>{this.state.searchTerm}</pre>
          <ul>
            {this.state.images.map((item, index) => {
              return (
                <li>
                  <img src={item.images.downsized.url} alt={item.title} />
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
