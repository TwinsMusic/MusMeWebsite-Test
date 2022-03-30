import React from "react";
import { render } from "react-dom";

const path = "http://localhost:8080/";

//const getUserByUserID = "http://localhost:9000/testConnection";

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
        /*
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: 2, title: "test1", artist: "test2", year: "test3", genre: "test4", tags: ["test5a", "test5b"], url: "test6"})
        };
        fetch(path + "api/tracks/1", requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ bool: data.id }));
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
            */
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