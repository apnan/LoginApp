import React from 'react'
import { useState } from 'react';

function RegisterForm({ Register, Menu }) {
    const [details, setDetails] = useState({ firstname: "", Lastname: "", email: "", password: "" });
    const [currentPage] = useState({ value: "" });

    const submitHandler = e => {
        Register(details);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                name: details.firstname + details.lastname,
                password: details.password,
                email: details.email
            })
        };
        fetch('http://localhost:8000/user/signup', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        e.preventDefault();
    }

    const handleClick = () => {
        currentPage.value = "login";
        Menu(currentPage)
    }



    return (

        <
        form onSubmit = { submitHandler }
        className = "form-inner" >
        <
        div className = 'form-inner' >
        <
        h2 > Register Here < /h2>                 <
        div className = "form-group" >
        <
        label htmlFor = 'firstname' > First Name: < /label> <
        input type = "text"
        required name = "firstname"
        id = "firstname"
        className = 'form-control'
        onChange = { e => setDetails({...details, firstname: e.target.value }) }
        value = { details.value }
        /> < /
        div > <
        div className = "form-group" >
        <
        label htmlFor = 'name' > Last Name: < /label> <
        input type = "text"
        required name = "lastname"
        id = "lastname"
        className = 'form-control'
        onChange = { e => setDetails({...details, lastname: e.target.value }) }
        value = { details.value }
        /> < /
        div > <
        div className = "form-group" >
        <
        label htmlFor = 'email' > Email: < /label> <
        input type = "email"
        name = "email"
        id = "email"
        className = 'form-control'
        onChange = { e => setDetails({...details, email: e.target.value }) }
        value = { details.value }
        /> < /
        div > <
        div className = "form-group" >
        <
        label htmlFor = 'password' > Password: < /label> <
        input type = "password"
        required name = "password"
        id = "password"
        className = 'form-control'
        onChange = { e => setDetails({...details, password: e.target.value }) }
        value = { details.value }
        /> < /
        div >

        <
        input type = "submit"
        className = 'form-control-sm'
        value = "submit" / >
        <
        div className = "form-text" >
        Have an account ? < a href = '#'
        onClick = { handleClick } > Login < /a> < /
        div > <
        /div> < /
        form >
    )
}
export default RegisterForm;