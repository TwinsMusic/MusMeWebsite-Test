import React from "react";
import { render } from "react-dom";
import Stripe from "react-stripe-checkout";

const path = "http://localhost:8080/";

function Test() {
    
    //async function handleToken(token) {
    //    console.log(token);
    //    await axios.post(path + "api/payment/charge", "", {
    //        headers: {
    //            token: token.id,
    //            amount: 500,
    //        },
    //    }).then(() => {
    //        alert("Payment Success");
    //    }).catch((error) => {
    //        alert(error);
    //    });
    //}
    
   async function handleToken(token) {
       fetch(path + "api/payment/charge", {
           method: 'POST',
           headers: {
                token: token.id,
                amount: 500,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
           },
        }).then(() => {
            alert("Payment Success");
        }).catch((error) => {
            alert(error);
        });
       }
    return (
        <div className="App">
            <Stripe
                stripeKey="pk_test_51JctpFAd92q79vbz4fYEbwO1BAxjogfYPP28hS7UENwH0cV8hPyqZcj3wRcuntCc9MoAoA1BkEIxp27LkSuzPIA400S2njXeaY"
                token={handleToken}
            />
        </div>
    );
}
export default Test;


/*
//Backend connection code, WORKS
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            artist: "",
            year: "",
            genre: "",
            tags: [],
            url: "",
            test: ""

        };
    }
    componentDidMount() {
        
        fetch(path + "api/tracks/1")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ id: data.id });
                this.setState({ title: data.title });
                this.setState({ artist: data.artist });
                this.setState({ year: data.year });
                this.setState({ genre: data.genre });
                this.setState({ tags: data.tags });
                this.setState({ url: data.url });
            })

            var request = require('request');
            var options = {
            'method': 'POST',
            'url': path + 'api/tracks/save',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": "Nightcall",
                "artist": "Kavensky",
                "year": "2010",
                "genre": "Outrun",
                "url": "https://youtu.be/MV_3Dpw-BRY",
                "tags": "outrun, vaporwave, retro"
            })

            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
            })

            fetch(path + "api/tracks/2")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ id: data.id });
                this.setState({ title: data.title });
                this.setState({ artist: data.artist });
                this.setState({ year: data.year });
                this.setState({ genre: data.genre });
                this.setState({ tags: data.tags });
                this.setState({ url: data.url });
            })
    }
    render() {
        return (
            <div>
                <p>TESTING</p>
                <h1>Id: {this.state.id}</h1>
                <h1>Artist: {this.state.artist}</h1>
                <h1>Title: {this.state.title}</h1>
                <h1>Year: {this.state.year}</h1>
                <h1>Genre: {this.state.genre}</h1>
                <h1>Tags: {this.state.tags}</h1>
                <h1>URL: {this.state.url}</h1>
                <p>TESTING</p>
            </div>
        );
    }
    
}

export default Test;
*/