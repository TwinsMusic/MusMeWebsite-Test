import React from "react";

import "./SignUp.css";

const path = "http://localhost:8080/";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",

        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleCreate(event) {
        document.getElementById("successAlert").style.display = "none";
        document.getElementById("existsAlert").style.display = "none";
        document.getElementById("genericAlert").style.display = "none";
        event.preventDefault();
        fetch(path + "api/user/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
            }),
        }).then((response) => response.json())
            .then(data => {
                if(data === -2) {
                    document.getElementById("existsAlert").style.display = "block";
                }
                else if(data >= 0) {
                    document.getElementById("successAlert").style.display = "block";
                    window.location.href = "/login";
                }
                else {
                    document.getElementById("genericAlert").style.display = "block";
                    alert("Account Creation Failed");
                }
        });
    }

    render() {
        return(
            <div className="wrapper">
                <h1>Create Account</h1>
                <div className="formWrapper">
                    <div id="successAlert" className="alert" class="notification is-success">
                        Account creation successful
                    </div>
                    <div id="existsAlert" className="alert" class="notification is-danger">
                        Creation failed: Username already exists
                    </div>
                    <div id="genericAlert" className="alert" class="notification is-danger">
                        Creation failed
                    </div>
                    <div className="firstNameLabelAndInput">
                        <h5 className= "fieldLabel">First Name</h5>
                        <div class="field">
                            <input class="input is-rounded" type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                        </div>
                    </div>

                    <p/>

                    <div className="lastNameLabelAndInput">
                        <h5 className= "fieldLabel">Last Name</h5>
                        <div class="field">
                            <input class="input is-rounded" type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                        </div>
                    </div>

                    <p/>

                    <div className="emailLabelAndInput">
                        <h5 className= "fieldLabel">Email</h5>
                        <div class="field">
                            <input class="input is-rounded" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                    </div>

                    <p/>

                    <div className="usernameLabelAndInput">
                        <h5 className= "fieldLabel">Username</h5>
                        <div class="field">
                            <input class="input is-rounded" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                        </div>
                    </div>

                    <p/>


                    <div className="passwordLabelAndInput">
                        <h5 className= "fieldLabel">Password</h5>
                        <div class="field">
                            <input class="input is-rounded" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                        </div>
                    </div>

                    <p/>

                    <button id="login" class="button is-primary is-rounded" onClick={this.handleCreate}>Create</button>
                    <p/>
                </div>
            </div>
        );
    }
}

export default SignUp;