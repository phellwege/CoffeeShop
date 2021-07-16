import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import { navigate } from "@reach/router";
function login() {
    
    const Login = ({ setLoggedIn }) => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [errorMessage, setErrorMessage] = useState("");

        const login = (event) => {
            event.preventDefault();
            axios
                .post(
                    "http://localhost:8000/api/login",
                    { email, password },
                    {
                        withCredentials: true,
                    }
                )
                .then((res) => {
                    console.log(res);
                    setLoggedIn();
                    navigate("/users");
                })
                .catch((err) => {
                    console.log(err);
                    setErrorMessage(err.response.data.msg);
                });
        };

        return (
            <fieldset>
                <legend>Sign In</legend>
                <form onSubmit={login}>
                    <p className="form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </p>
                    <p className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="email"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </p>
                    <input type="submit" value="Sign In" className="btn" />
                    <p className="error-message">{errorMessage ? errorMessage : ""}</p>
                </form>
            </fieldset>
        );
    };


}
export default login;