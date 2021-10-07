import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import "./Login.css";

const testConnection = "http://localhost:9000/testConnection";
 
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: ""
        };
        this.getMessage = this.getMessage.bind(this);
    }

    componentDidMount() {
        console.log("mounted");
        this.setState({});
    }

    getMessage() {
        alert("test alert")
        fetch(testConnection)
            .then(response => response.json()).then(data => this.setState({message: data}))
    }

    render() {
        return(
        <div>
            <h1>Header!!</h1>
            <h4>Your username is</h4>
            <h5>{this.state.message}</h5>
            <button onClick={this.getMessage}>Get Message!</button>
        </div>
        );
    }
}
 
export default Main;