import React, { Component } from 'react'
import Menu from './Menu';
import Footer from './Footer'

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default BaseLayout
