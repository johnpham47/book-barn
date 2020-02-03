import React from 'react';
import { connect } from 'react-redux';

const Login = (props) => {
    return (
        <div>
            <button onClick={props.onLogin}>Login</button>
            <button onClick={props.onLogout}>Logout</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({ type: 'LOGIN' }),
        onLogout: () => dispatch({ type: 'LOGOUT' })
    }
}
export default connect(null, mapDispatchToProps)(Login)