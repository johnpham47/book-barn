import React, { Component } from 'react'
import { Link, Navlink } from 'react-router-dom'

export class Menu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Add Books</Link></li>
                <li><Link to="/view">View Books</Link></li>
            </ul>
        )
    }
}

export default Menu
