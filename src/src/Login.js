import React from "react";
import "./Login.css";
import Admin from "./Admin";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    BrowserRouter
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
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleLogin(event) {
        document.getElementById("successAlert").style.display = "none";
        document.getElementById("existsAlert").style.display = "none";
        document.getElementById("passwordAlert").style.display = "none";
        document.getElementById("genericAlert").style.display = "none";
        event.preventDefault();
        fetch(path + "api/user/validate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        }).then((response) => response.json())
            .then(data => {
                if(data === -2) {
                    document.getElementById("existsAlert").style.display = "block";
                }
                else if(data === -3) {
                    document.getElementById("passwordAlert").style.display = "block";
                }
                else if(data >= 0) {
                    this.setState({loginId: data});
                    loggedIn = true;
                    document.getElementById("successAlert").style.display = "block";
                    this.forceUpdate();
                }
                else {
                    document.getElementById("genericAlert").style.display = "block";
                }
        });
    }

    render() {
        if(loggedIn) {
            return(
                <div>
                    <Admin loginId = {this.state.loginId}></Admin>
                </div>
            );
        }
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
                            <h5 className= "fieldLabel">Username</h5>
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
                                <input class="input is-rounded" type="password" value={this.state.password} onChange = {this.handlePasswordChange}/>
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                        </div>  
                        <button id="login" class="button is-primary is-rounded" onClick={this.handleLogin}>Login</button>
                        <p/>
                        <Link to="/signup">
                            <button id="signup" class="button is-primary is-rounded">Sign Up</button>
                        </Link>
                        <p/><p/>
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