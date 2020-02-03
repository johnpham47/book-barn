import React from 'react'
import {Link} from 'react-router-dom'

const LoggedInMenu = (props) => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Books</Link></li>
            <li><Link to="/view">View Books</Link></li>
            <li><Link to="login">Logout</Link></li>
        </ul>
    )
}

export default LoggedInMenu