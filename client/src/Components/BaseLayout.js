import React, { Component } from 'react'
import Menu from './Menu';
import Footer from './Footer'
import Login from './Login'

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Login />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default BaseLayout
