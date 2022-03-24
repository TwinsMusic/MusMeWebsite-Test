import React from "react";
import { render } from "react-dom";

const path = "http://localhost:8080/";

//const getUserByUserID = "http://localhost:9000/testConnection";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "hello"
        };
    }
    async componentDidMount() {
        const response = await fetch(path + "api/tracks");
        console.log(response);
        const body = await response.json();
        console.log(body);
        this.setState({test: body});
        /*
        fetch("http://localhost:8080/api/tracks/1", {mode: 'no-cors'})
            .then(res => res.json())
            .then(data => this.setState({ test: data }))
        */
        /*
        //KINDA WORKS!
        fetch("http://localhost:8080/api/tracks", {mode: 'no-cors'})
            //.then(response => response.json())
            .then(res => {
                console.log(res);
                return JSON.stringify(res);
            })
            .then(data => {
                console.log("Data: " + (data));
                this.setState({test: data});
            })
            
            */
           /*
        client({method: 'GET', path: '/api/tracks/1'}).then(response => {
            this.setState({test: response.entity._embedded.tracks});
        });*/
        
        /*
        fetch("http://localhost:8080/api/tracks", {mode: 'no-cors'})
        .then(response => {
            const parsedResponse = response.json();
            console.log("parsed response: " + parsedResponse)
            this.setState({test: parsedResponse.entity._embedded.tracks});
        });
        */

        /*
            .then(data => {
                console.log("data: ", data.entity._embedded.tracks);
                this.setState({test: data.entity._embedded.tracks});
            });
            */
            
    }
    render() {
        return (
            <div>
                <p>TESTING</p>
                <h1>{this.state.test}</h1>
                <p>TESTING</p>
            </div>
        );
    }
}

export default Test;
/*
function Test() {
    return(
        <p>TESTING TESTING TESTING</p>
    );
}
/*

export default Test;

/*
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null.
            isLoaded: false,
            csrfToken: null,
            currentUserID: -1
        }
    }

    render() {
        return 
        <div>
            <h1>This works!</h1>
        </div>
    }
}
*/