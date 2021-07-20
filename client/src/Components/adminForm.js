import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import {navigate} from '@reach/router';

//admin form makes officers

export default (props) => {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);
    //handler when the form is submitted

    const onSubmitHandler = e => {
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
        };
        axios.post('http://localhost:8000/api/officer',
            data,
        )
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <div>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>first name</label>
                <br/>
                <input 
                    type="text" 
                    onChange={(e)=>setFirstName(e.target.value)} 
                    value={firstName}
                    />
            </p>
            <p>
                <label>Last name</label>
                <br/>
                <input 
                    type="text" 
                    onChange={(e)=>setLastName(e.target.value)} 
                    value={lastName}
                />
            </p>
            <p>
                <label>email</label><br/>
                <input 
                    type="text" 
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email}
                />
            </p>
            <p>
                <label>Username</label>
                <br/>
                <input 
                    type="text" 
                    onChange={(e)=>setUsername(e.target.value)} 
                    value={username}
                />
            </p>
            <p>
                <label>Password</label><br/>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p>
            <input type="submit"/>

        {errors?.firstName && (
            <span style={{ color: "red" }}>{errors?.firstName?.message}</span>
        )}
        {errors?.lastName && (
            <span style={{ color: "red" }}>{errors?.lastName?.message}</span>
        )}
        {errors?.email && (
            <span style={{ color: "red" }}>{errors?.email?.message}</span>
        )}
        {errors?.username && (
            <span style={{ color: "red" }}>{errors?.username?.message}</span>
        )}
        {errors?.password && (
            <span style={{ color: "red" }}>{errors?.password?.message}</span>
        )}
        </form>
        </div>
    )};
