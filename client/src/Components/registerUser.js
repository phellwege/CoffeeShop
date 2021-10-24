import React, { useState } from "react";
import axios from 'axios';


// function register() {
    const SignUp = (props) => {
        const [username, setUsername] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [errors, setErrors] = useState(null);

        const register = (event) => {
            event.preventDefault();

            const newUser = { username, firstName, lastName, email, password, confirmPassword };

            axios
                .post("http://localhost:8000/api/register", newUser, {
                    withCredentials: true,
                })
                .then((res) => {
                    console.log(res);
                    setUsername("");
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                })
                .catch((err) => {
                    console.log(err);
                    setErrors(err.response.data.errors);
                });
        };

        return (
            <fieldset>
                <legend>Register</legend>

                <form onSubmit={register}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                        {errors?.username && (
                            <span className="error-message">
                                {errors.username?.properties?.message}
                            </span>
                        )}
                    </div>
                        <br/>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />
                        {errors?.firstName && (
                            <span className="error-message">
                                {errors.firstName?.properties?.message}
                            </span>
                        )}
                    </div>
                        <br/>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                        {errors?.lastName && (
                            <span className="error-message">
                                {errors.lastName?.properties?.message}
                            </span>
                        )}
                    </div>
                        <br/>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        {errors?.email && (
                            <span className="error-message">
                                {errors.email?.properties?.message}
                            </span>
                        )}
                    </div>
                        <br/>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="email"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        {errors?.password && (
                            <span className="error-message">
                                {errors.password?.properties?.message}
                            </span>
                        )}
                    </div>
                        <br/>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                        />
                        {errors?.confirmPassword ? (
                            <span className="error-message">
                                {errors.confirmPassword?.properties?.message}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                        <br/>
                    <input type="submit" value="Sign Up" className="btn" />
                </form>
            </fieldset>
        );
    };

// }
export default SignUp;