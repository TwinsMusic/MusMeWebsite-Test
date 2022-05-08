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
        this.handleResetTokenChange = this.handleResetTokenChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);

    }

    handleResetTokenChange(event) {
        this.setState( {token: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleConfirmPasswordChange(event) {
        this.setState({confirmPassword: event.target.value});
    }

    handleCreate(event) {
        document.getElementById("successAlert").style.display = "none";
        document.getElementById("existsAlert").style.display = "none";
        document.getElementById("genericAlert").style.display = "none";

        event.preventDefault();
        // if(this.state.password === this.state.confirmPassword) {
        //     document.getElementById("login").onclick = this.handleCreate;
        //
        // }
        fetch(path + "api/user/resetPassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
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
                if(data === -2) {
                    document.getElementById("existsAlert").style.display = "block";
                }
                else if(data >= 0) {
                    document.getElementById("successAlert").style.display = "block";
                    window.location.href = "/admin";
                }
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