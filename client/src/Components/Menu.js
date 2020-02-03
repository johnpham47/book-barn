import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import LoggedInMenu from '../Components/LoggedInMenu'
import LoggedOutMenu from '../Components/LoggedOutMenu'

export class Menu extends Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn
        if (isLoggedIn) {
            return <LoggedInMenu />
        }
        else {
            return <LoggedOutMenu />
    }
}
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isAuth
    }
}

export default connect(mapStateToProps) (Menu)
