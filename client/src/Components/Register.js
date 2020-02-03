import React from 'react'
import {useState} from 'react'

const Register = () => {
    const [user, setUser] = useState({})

    function onHandleInput(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function onSubmitRegistration() {
        console.log('Registering...')
        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            })
        })
    }
    return (
        <div>
            <h1>Register</h1>
            <label>Enter Username: </label>
            <br />
            <input name="username" onChange={onHandleInput} type="textbox" placeholder="Enter username" />
            <br />
            <br />
            <label>Enter Password: </label>
            <br />
            <input name="password" onChange={onHandleInput} type="textbox" placeholder="Enter password" />
            <br />
            <br />
            <button onClick={onSubmitRegistration}>Register</button>
        </div>
    )
}

export default Register