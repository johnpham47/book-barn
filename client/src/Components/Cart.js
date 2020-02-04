import React from 'react'
import { connect } from 'react-redux'

function Cart(props) {
    return (
        <p>Cart: {props.items} items</p>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart
    }
}

export default connect(mapStateToProps) (Cart)