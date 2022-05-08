import React from "react";

import "./ForgotPassword.css";

const path = "http://localhost:8080/";

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",

        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        document.getElementById("successAlert").style.display = "none";
        document.getElementById("existsAlert").style.display = "none";
        document.getElementById("genericAlert").style.display = "none";
        event.preventDefault();
        // change fetch to send email
        fetch(path + "api/user/forgotPassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                firstName: null,
                lastName: null,
                email: this.state.email,
                username: null,
                password: null,
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
                }
        });
    }

    render() {
        return(
            <div className="wrapper">
                <h1>Forgot Password</h1>
                <div className="formWrapper">
                    <div id="successAlert" className="alert" class="notification is-success">
                        Password reset email sent
                    </div>
                    <div id="existsAlert" className="alert" class="notification is-danger">
                        Reset failed: Account does not exist
                    </div>
                    <div id="genericAlert" className="alert" class="notification is-danger">
                        Email failed to send
                    </div>

                    <div className="emailLabelAndInput">
                        <h5 className= "fieldLabel">Account Email</h5>
                        <div class="field">
                            <input class="input is-rounded" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                    </div>

                    <p/>

                    <button id="submit" class="button is-primary is-rounded" onClick={this.handleSubmit}>Submit</button>
                    <p/>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;