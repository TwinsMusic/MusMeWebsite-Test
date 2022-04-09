import React from "react";
import { render } from "react-dom";
import "./Admin.css";

const path = "http://localhost:8080/";

class Admin extends React.Component {
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
        this.addTrack = this.addTrack.bind(this);
    }
    //Get all tracks from /api/tracks/all
    componentDidMount() {
        fetch(path + "api/tracks/all")
            .then(res => res.json())
            .then(data => {
                for(let i = 0; i < data.length; i++) {
                    let body = document.getElementById("tableBody");
                    body.appendChild(document.createElement('tr'))
                    let row = body.lastChild;
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].title;
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].artist;
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].year;
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].genre;
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].tags;
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].url;
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = "<button id='delete' className='formButton' class='button is-primary' onClick={this.deleteTrack}>Delete</button>";
                }
            })
    }

    addTrack () {
    }

    render() {
        return(
            <div class="wrapperDiv">
                <table class="center">
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Tags</th>
                        <th>URL</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr>
                            <td>
                                <input class="input is-rounded" type="text" id="title" name="title" placeholder="Title" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="artist" name="artist" placeholder="Artist" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="year" name="year" placeholder="Year" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="genre" name="genre" placeholder="Genre" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="tags" name="tags" placeholder="Tags" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="url" name="url" placeholder="URL" />
                            </td>
                            <td>
                                <button id="add" className='formButton' class="button is-primary" onClick={this.addTrack}>Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Admin;