import React from 'react'
import { useState } from 'react';
//1.pass login and menu method to app.js when we call that
function LoginPage({ Login, Menu }) {

    const [details, setDetails] = useState({ email: "", password: "" });
//from submit.login details send to app js.without refresh submit-preventdefault
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    const [currentPage] = useState({ value: "register" })
//state change when we click register and send app.js
    const handleClick = () => {
        currentPage.value = "register";
        Menu(currentPage)
    }

    return (
        <form onSubmit={submitHandler} >
            <div className="form-inner">
                <h2>Loging</h2>

                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type="email" required name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.value} />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" required name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.value} />
                </div>

                <input type="submit" value="submit" />
                <div className="form-text">
                    Do not have an account? <a href='#' onClick={handleClick}>Register</a>
                </div>
            </div>
        </form>
    )
}

export default LoginPage;
