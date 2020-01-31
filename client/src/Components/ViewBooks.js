import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import AllBooks from './AllBooks';

// class ViewBooks extends Component {

//     render() {
//         console.log(this.context)
//         return (
//             console.log("Hi")
//         )
//     }
// }

const ViewBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        let newArray = []
        fetch('http://localhost:8080/displayBooks', {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            },

        })
        .then(response => response.json())
        .then(json => {
            for (let i=0; i < json.results.length; i++) {
                newArray.push(json.results[i])
            }
            setBooks(newArray)
        })
    }, [])
    return(
        <ul>
            <AllBooks allBooks={books}/>
        </ul>
    )
}

export default ViewBooks