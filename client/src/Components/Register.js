import React from 'react'

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <label>Enter Username: </label>
            <br />
            <input name="username"  type="textbox" placeholder="Enter username" />
            <br />
            <br />
            <label>Enter Password: </label>
            <br />
            <input name="password"  type="textbox" placeholder="Enter password" />
            <br />
            <br />
            <button>Register</button>
        </div>
    )
}

export default Register