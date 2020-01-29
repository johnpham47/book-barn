import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookList: []
    }
  }

  handleBookInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
    console.log(this.state.book)
  }

  handleAddBook = (e) => {
    const newBook = {
      title: this.state.title,
      genre: this.state.genre,
      publisher: this.state.publisher,
      year: this.state.year,
      URL: this.state.imgURL
    }
    this.setState({
      bookList: this.state.bookList.concat(newBook)
})
    fetch('https://localhost8080/submitBook', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        genre: this.state.genre,
        publisher: this.state.publisher,
        year: this.state.year,
        imgURL: this.state.imgURL
      })
    })
  }
  

  render() {
    return (
      <div>
        <input name="title" onChange={this.handleBookInput} placeholder="Enter title" />
        <input name="genre" onChange={this.handleBookInput} placeholder="Enter genre" />
        <input name="publisher" onChange={this.handleBookInput} placeholder="Enter publisher" />
        <input name="year" onChange={this.handleBookInput} type="number" placeholder="Enter year" />
        <input name="imgURL" onChange={this.handleBookInput} placeholder="Enter book URL (optional)" />
        <button onClick={this.handleAddBook}>Add</button>
      </div>
    )
  }
}

export default App;
