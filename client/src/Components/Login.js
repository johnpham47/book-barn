import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react'
import { withRouter} from 'react-router-dom'

const Login = (props) => {
    const [user, setUser] = useState({})

    function handleInput(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function onSubmitLogin() {
        console.log("Authenticating login...")
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            })
        })
        .then(response => response.json())
        .then(auth => {
            if (auth) {
                props.onLogin()
                props.history.push("/add")
            }
            else {
                props.history.push("/login")
            }
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <label>Username</label>
            <br />
            <input type="text" onChange={handleInput} name="username" />
            <br />
            <label>Password</label>
            <br />
            <input type="text" onChange={handleInput} name="password" />
            <br />
            <button onClick={onSubmitLogin}>Login</button>
            {/* <button onClick={props.onLogout}>Logout</button> */}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({ type: 'LOGIN' }),
        onLogout: () => dispatch({ type: 'LOGOUT' })
    }
}
export default connect(null, mapDispatchToProps)(withRouter(Login))