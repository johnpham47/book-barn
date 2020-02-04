import React, { Component } from 'react'
import Menu from './Menu';
import Footer from './Footer'
import Cart from './Cart'

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Cart />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default BaseLayout
