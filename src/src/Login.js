import React from "react";
import "./Login.css";
import Admin from "./Admin";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

const path = "http://localhost:8080/";
var loggedIn = false;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginId: "",
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    //Handles a change in the username text field
    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    //Handles a change in the password text field
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    //Handles the login button being clicked
    handleLogin(event) {
        //Hide all alerts
        document.getElementById("successAlert").style.display = "none";
        document.getElementById("existsAlert").style.display = "none";
        document.getElementById("passwordAlert").style.display = "none";
        document.getElementById("genericAlert").style.display = "none";
        event.preventDefault();

        // this.setState({ loginId: data });
        loggedIn = true;
        document.getElementById("successAlert").style.display = "block";
        this.forceUpdate();

        /*
        //Verifty information with server
        fetch(path + "api/user/validate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            //Send the username and password to the server
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        }).then((response) => response.json())
            .then(data => {
                alert(data);
                //If the username already exists return a error-specific message
                if (data === -2) {
                    document.getElementById("existsAlert").style.display = "block";
                }
                //If the password is incorrect return a error-specific message
                else if (data === -3) {
                    document.getElementById("passwordAlert").style.display = "block";
                }
                //If the username and password are correct return set the user's id in the state and reload the page
                else if (data >= 0) {
                    //else if(data == data) {
                    this.setState({ loginId: data });
                    loggedIn = true;
                    document.getElementById("successAlert").style.display = "block";
                    this.forceUpdate();
                }
                //Otherwise return a generic error message
                else {
                    document.getElementById("genericAlert").style.display = "block";
                }
            });
            */
    }

    render() {
        //If the user is logged in, redirect them to the admin page
        if (loggedIn) {
            return (
                <div>
                    <Admin loginId={this.state.loginId}></Admin>
                </div>
            );
        }
        //Otherwise display the login page
        else {
            return (
                <div className="wrapper">
                    <h1>Login</h1>
                    <div id="successAlert" className="alert" class="notification is-success">
                        Login successful
                    </div>
                    <div id="existsAlert" className="alert" class="notification is-danger">
                        Login failed: Username does not exist
                    </div>
                    <div id="passwordAlert" className="alert" class="notification is-danger">
                        Login failed: Password is incorrect
                    </div>
                    <div id="genericAlert" className="alert" class="notification is-danger">
                        Login failed
                    </div>
                    <div className="formWrapper">
                        <div className="usernameLabelAndInput">
                            <h5 className="fieldLabel">Username</h5>
                            <div class="field">
                                <p class="control has-icons-left">
                                    <input class="input is-rounded" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <p></p>
                        <div className="passwordLabelAndInput">
                            <h5 className="fieldLabel">Password</h5>
                            <div class="field">
                                <p class="control has-icons-left">
                                    <input class="input is-rounded" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button id="login" class="button is-primary is-rounded" onClick={this.handleLogin}>Login</button>
                        <p /><p />
                        <Link to="/forgotpassword">
                            <button id="forgotpassword" class="button is-link is-rounded">Forgot Password?</button>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}

export default Login;