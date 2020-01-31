import React, { Component } from 'react'
import { useState, useEffect } from 'react'



const AllBooks = (props) => {
    // const [title, setTitle] = useState('')
    // const [genre, setGenre] = useState('')
    // const [publisher, setPublisher] = useState('')
    // const [year, setYear] = useState(0)
    // const [imgURL, setImgURL] = useState('')
    const [book, setBook] = useState({})

    function onHandleChange(e) {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    function onSubmitUpdate(index) {
        console.log('Updating Book')
        console.log(index)
        fetch('http://localhost:8080/updateBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: index,
                title: book.title,
                genre: book.genre,
                publisher: book.publisher,
                year: book.year,
                imgURL: book.imgURL
            })
        })
    }

    function onDelete(index) {
        fetch('http://localhost:8080/deleteBook', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: index
            })
        })
    }
    return(
        <div>
            <h1>All Books</h1>
            {props.allBooks.map(singleBook => {
                return (
                <div name="id" key={singleBook.id}> 
                    <input name="title" onChange={onHandleChange} type="textbox" placeholder="Update title" />
                    <input name="genre" onChange={onHandleChange} type="textbox" placeholder="Update genre" />
                    <input name="publisher" onChange={onHandleChange} type="textbox" placeholder="Update publisher" />
                    <input name="year" onChange={onHandleChange} type="textbox" placeholder="Update year" />
                    <input name="imgURL" onChange={onHandleChange} type="textbox" placeholder="Update book URL (optional)" />
                    <button key={singleBook.id} onClick={() => onSubmitUpdate(singleBook.id)}>Edit</button>
                    <button onClick={() => onDelete(singleBook.id)}>Delete</button>
                    <br />
                    <br />
                    <div> Title: {singleBook.title}</div>
                    <div> Genre: {singleBook.genre}</div>
                    <div> Publisher: {singleBook.publisher}</div>
                    <div> Year: {singleBook.year}</div>
                    <br />
                   {/* <img src={book.imgURL}></img> */}
                </div>
            )})}

        </div>
    )
} 

export default AllBooks