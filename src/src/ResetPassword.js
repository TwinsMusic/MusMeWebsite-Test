import React from "react";

import "./ResetPassword.css";

const path = "http://localhost:8080/";

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resetToken: "",
            password: "",
            confirmPassword: ""
        };
        //this.handleResetTokenChange = this.handleResetTokenChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        //this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);

    }

    //Handle a change in the password field
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    //Send the new password and reset token to the server for verification and reset
    handleCreate(event) {
        //Hide all alerts
        document.getElementById("successAlert").style.display = "none";
        document.getElementById("existsAlert").style.display = "none";
        document.getElementById("genericAlert").style.display = "none";

        event.preventDefault();

        //Verifty information with server
        fetch(path + "api/user/resetPassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            //stringify a user object with all unnecessary fields null
            body: JSON.stringify({
                firstName: null,
                lastName: null,
                email: null,
                username: null,
                password: this.state.password,
                resetToken: this.state.resetToken
            }),
        }).then((response) => response.json())
            .then(data => {
                //If the username does not exist, display an exists alert
                if(data === -2) {
                    document.getElementById("existsAlert").style.display = "block";
                }
                //If the username exists, display a success alert and redirect to the login page
                else if(data >= 0) {
                    document.getElementById("successAlert").style.display = "block";
                    window.location.href = "/admin";
                }
                //Otherwise, display a generic alert
                else {
                    document.getElementById("genericAlert").style.display = "block";
                }
        });
    }

    render() {
        const search = this.props.location.search;
        const resetToken = new URLSearchParams(search).get("token");
        this.state.resetToken = resetToken;
        return(
            <div className="wrapper">
                <h1>Reset Account Password</h1>
                <div className="formWrapper">
                    <div id="successAlert" className="alert" class="notification is-success">
                        Password reset successful
                    </div>
                    <div id="existsAlert" className="alert" class="notification is-danger">
                        Reset failed: Token is invalid
                    </div>
                    <div id="genericAlert" className="alert" class="notification is-danger">
                        Reset failed
                    </div>

                    <p/>

                    <div className="passwordLabelAndInput">
                        <h5 className= "fieldLabel">New Password</h5>
                        <div class="field">
                            <input class="input is-rounded" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                        </div>
                    </div>

                    <p/>

                    <button id="login" class="button is-primary is-rounded" onClick={this.handleCreate}>Reset</button>
                    <p/>
                </div>
            </div>
        );
    }
}

export default ResetPassword;