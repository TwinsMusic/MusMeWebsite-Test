import { API } from "aws-amplify";
import React from "react";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import "./Admin.css";

const apiName = "musmeAPI";
const path = "https://dynamodb.us-east-2.amazonaws.com";

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
            onHome: false,
            editing: false,
            loggedIn: false,
            adminId: this.props.loginId,

        };
        this.addTrack = this.addTrack.bind(this);
        this.deleteTrack = this.deleteTrack.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);
        this.handleURLChange = this.handleURLChange.bind(this);
        this.emptyTable = this.emptyTable.bind(this);
        this.emptyForms = this.emptyForms.bind(this);
        this.editTrack = this.editTrack.bind(this);
        this.saveEdits = this.saveEdits.bind(this);
        this.updateOnHome = this.updateOnHome.bind(this);
        this.logout = this.logout.bind(this);
    }
    //Reload the page if the user is logged in on mounting
    componentDidMount() {
        console.log("ID Admin: " + this.state.adminId);
        // Commented out for testing purposes, uncomment later!
        //if(this.state.adminId >= 0) {
            this.loadPage();
        //}
    }

    //Render the tracks from the database and set the add button to call the addTrack function
    loadPage () {
        this.renderTracks();
        document.getElementById("add").onclick = this.addTrack;
    }

    //Retrieve tracks from the database and render them in the table
    //Dynamically create table based on the number of tracks in the database
    renderTracks() {
        //fetch(path + "api/tracks/all")
            //.then(res => res.json())
            //.then(data => {
        console.log("Rendering Tracks");
        API.get(apiName, '/songs', {})
            .then(res => JSON.parse(res))
            .then(data => {
                //data[i] is a track object
                console.log(data);
                for(let i = 0; i < data.length; i++) {
                    let body = document.getElementById("tableBody");
                    let tableRow = body.appendChild(document.createElement('tr'));
                    //set the id of the row to the track id
                    tableRow.id = data[i].id;
                    let row = body.lastChild;
                    //create a td for the title
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].title;
                    //create a td for the artist
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].artist;
                    //create a td for the year
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].year;
                    //create a td for the genre
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].genre;
                    //create a td for the tags
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].tags;
                    //create a td for the url
                    row.appendChild(document.createElement('td'));
                    row.lastChild.innerHTML = data[i].url;

                    //create a td for the delete button
                    row.appendChild(document.createElement('td'));
                    let deleteButton = document.createElement("button");
                    //set the id of the button to the track id
                    deleteButton.id = data[i].id + "delete";
                    deleteButton.className = "button is-primary formButton";
                    //set the onclick event to the deleteTrack function
                    deleteButton.onclick = this.deleteTrack;
                    deleteButton.innerHTML = "Delete";
                    //append the button to the td
                    row.lastChild.appendChild(deleteButton);

                    //create a td for the edit button
                    row.appendChild(document.createElement('td'));
                    let editButton= document.createElement("button");
                    //set the id of the button to the track id
                    editButton.id = data[i].id + "edit";
                    editButton.className = "button is-primary formButton";
                    //set the onclick event to the editTrack function
                    editButton.onclick = this.editTrack;
                    editButton.innerHTML = "Edit";
                    //append the button to the td
                    row.lastChild.appendChild(editButton);

                    //create a td for the onHome checkbox
                    row.appendChild(document.createElement('td'));
                    let checkboxLabel = document.createElement("label");
                    checkboxLabel.className = "checkbox";
                    //create the checkbox
                    let checkbox = document.createElement("input");
                    //set the id of the checkbox to the track id
                    checkbox.id = data[i].id + "addToHome";
                    checkbox.className = "checkbox is-primary";
                    checkbox.class = "checkbox";
                    checkbox.type = "checkbox";
                    checkbox.innerHTML = "Add";
                    //set the checked property based off of database information
                    checkbox.checked = data[i].onHome;
                    //set the onclick event to the updateOnHome function
                    checkbox.onchange = this.updateOnHome;
                    //append the checkbox to the label
                    row.lastChild.appendChild(checkboxLabel);
                    //append the label to the td
                    checkboxLabel.appendChild(checkbox);
                }
            }).catch(err => {
                console.log(err);
            });
    }

    //Delet a track from the database
    deleteTrack(event) {
        //close any open alerts
        this.closeAllAlerts();
        var td = event.target.parentNode;
        var tr = td.parentNode;
        fetch(path + "api/tracks/" +  tr.id.substring(0, event.target.id.length - 6), {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data <= 0) {
                //If the track was deleted display success message
                document.getElementById("deleteSuccessAlert").style.display = "block";
            }
            else {
                //If the track was not deleted display error message
                document.getElementById("deleteFailureAlert").style.display = "block";
            }
        });
        tr.parentNode.removeChild(tr);

    }

    //Add a track to the database
    addTrack () {
        //close any open alerts
        this.closeAllAlerts();
        fetch(path + "api/tracks/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             //stringify a track object to be parsed on the backend
            body: JSON.stringify({
                "title": this.state.title,
                "artist": this.state.artist,
                "year": this.state.year,
                "genre": this.state.genre,
                "url": this.state.url,
                "tags": this.state.tags,
                "onHome": false
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data >= 0) {
                //If the track was added successfully, empty the form and render the tracks again and display a success
                document.getElementById("addSuccessAlert").style.display = "block";
                this.emptyTable();
                this.emptyForms();
                this.renderTracks();
            }
            else {
                //If the track was not added successfully, display a failure
                document.getElementById("addFailureAlert").style.display = "block";
                this.emptyTable();
                this.renderTracks();
            }
        });
    }

    //Edit a track in the database
    editTrack(event) {
        this.closeAllAlerts();
        this.setState({editing: true});
        var td = event.target.parentNode;
        var tr = td.parentNode;
        tr.style.display = "none";
        //set the state to the values of the track being edited
        this.setState({
            id: tr.id,
            title: tr.childNodes[0].innerHTML,
            artist: tr.childNodes[1].innerHTML,
            year: tr.childNodes[2].innerHTML,
            genre: tr.childNodes[3].innerHTML,
            tags: tr.childNodes[4].innerHTML,
            url: tr.childNodes[5].innerHTML
        });
        //Change add button to save button
        let addButton = document.getElementById("add");
        addButton.innerHTML = "Save";
        addButton.onclick = this.saveEdits;
        //move the existing track data into the text fields to be edidted
        document.getElementById("title").value = this.state.title;
        document.getElementById("artist").value = this.state.artist;
        document.getElementById("year").value = this.state.year;
        document.getElementById("genre").value = this.state.genre;
        document.getElementById("tags").value = this.state.tags;
        document.getElementById("url").value = this.state.url;

    }

    //Save the edits to the database
    saveEdits() {
        this.closeAllAlerts();
        fetch(path + "api/tracks/"+this.state.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            //stringify a track object to be parsed on the backend
            body: JSON.stringify({
                "title": this.state.title,
                "artist": this.state.artist,
                "year": this.state.year,
                "genre": this.state.genre,
                "url": this.state.url,
                "tags": this.state.tags,
                "onHome": this.state.onHome
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.id == this.state.id) {
                //if the database returns the same id as the one we are editing it is a success
                document.getElementById("updateSuccessAlert").style.display = "block";
                this.emptyTable();
                this.emptyForms();
                this.renderTracks();
            }
            else {
                //otherwise it is a failure from the backend
                document.getElementById("updateFailureAlert").style.display = "block";
                this.emptyTable();
                this.renderTracks();
            }
        });
        let addButton = document.getElementById("add");
        addButton.innerHTML = "Add";
        addButton.onclick = this.addTrack;
    }

    //Update onHome status of track in the database
    updateOnHome(event) {      
        this.closeAllAlerts();
        this.setState({editing: true});
        //event.target is checkbox, get table data and table row
        var td = event.target.parentNode.parentNode;
        var tr = td.parentNode;
        console.log(td);
        this.setState({
            id: tr.id,
            title: tr.childNodes[0].innerHTML,
            artist: tr.childNodes[1].innerHTML,
            year: tr.childNodes[2].innerHTML,
            genre: tr.childNodes[3].innerHTML,
            tags: tr.childNodes[4].innerHTML,
            url: tr.childNodes[5].innerHTML,
            onHome: event.target.checked
        });
        fetch(path + "api/tracks/"+this.state.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": this.state.title,
                "artist": this.state.artist,
                "year": this.state.year,
                "genre": this.state.genre,
                "url": this.state.url,
                "tags": this.state.tags,
                "onHome": this.state.onHome
            })
        })
    }

    //Empty the user entry forms
    emptyForms() {
        this.setState({
            title: "",
            artist: "",
            year: "",
            genre: "",
            tags: "",
            url: ""
        });
        document.getElementById("title").value = "";
        document.getElementById("artist").value = "";
        document.getElementById("year").value = "";
        document.getElementById("genre").value = "";
        document.getElementById("tags").value = "";
        document.getElementById("url").value = "";
    }

    //log out the user
    logout() {
        console.log("logout");
        window.location.reload();
    }

    //Empty the table
    emptyTable() {
        document.getElementById("tableBody").innerHTML = "";
    }

    //Handle a change in the title text box
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    //Handle a change in the artist text box
    handleArtistChange(event) {
        this.setState({artist: event.target.value});
    }

    //Handle a change in the year text box
    handleYearChange(event) {
        this.setState({year: event.target.value});
    }

    //Handle a change in the genre text box
    handleGenreChange(event) {
        this.setState({genre: event.target.value});
    }

    //Handle a change in the tags text box
    handleTagsChange(event) {
        this.setState({tags: event.target.value});
    }

    //Handle a change in the url text box
    handleURLChange(event) {
        this.setState({url: event.target.value});
    }

    //Close the add success alert
    closeAddSuccessAlert() {
        document.getElementById("addSuccessAlert").style.display = "none";
    }

    //Close the add failure alert
    closeAddFailureAlert() {
        document.getElementById("addFailureAlert").style.display = "none";
    }

    //Close the delete success alert
    closeDeleteSuccessAlert() {
        document.getElementById("deleteSuccessAlert").style.display = "none";
    }

    //Close the delete failure alert
    closeDeleteFailureAlert() {
        document.getElementById("deleteFailureAlert").style.display = "none";
    }

    //Close the update success alert
    closeUpdateSuccessAlert() {
        document.getElementById("updateSuccessAlert").style.display = "none";
    }

    //Close the update failure alert
    closeUpdateFailureAlert() {
        document.getElementById("updateFailureAlert").style.display = "none";
    }

    //Close all alerts
    closeAllAlerts() {
        this.closeAddSuccessAlert();
        this.closeAddFailureAlert();
        this.closeDeleteSuccessAlert();
        this.closeDeleteFailureAlert();
        this.closeUpdateSuccessAlert();
        this.closeUpdateFailureAlert();
    }

    render() {
        return(
            <div class="wrapperDiv">

                <div class="alertWrapper">
                    <div id="addSuccessAlert" className="alert" class="notification is-success">
                    <button class="delete" onClick={this.closeAddSuccessAlert}></button>
                        Track added successfully
                    </div>
                    <div id="addFailureAlert" className="alert" class="notification is-danger">
                    <button class="delete" onClick={this.closeAddFailureAlert}></button>
                        Failed to add track
                    </div>
                    <div id="updateSuccessAlert" className="alert" class="notification is-success">
                    <button class="delete" onClick={this.closeUpdateSuccessAlert}></button>
                        Track updatted successfully
                    </div>
                    <div id="updateFailureAlert" className="alert" class="notification is-warning">
                    <button class="delete" onClick={this.closeUpdateFailureAlert}></button>
                        Failed to update track, added as new track instead
                    </div>
                    <div id="deleteSuccessAlert" className="alert" class="notification is-success">
                    <button class="delete" onClick={this.closeDeleteSuccessAlert}></button>
                        Track deleted successfully
                    </div>
                    <div id="deleteFailureAlert" className="alert" class="notification is-danger">
                    <button class="delete" onClick={this.closeDeleteFailureAlert}></button>
                        Failed to delete track
                    </div>
                    
                </div>
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
                        <tr>
                        <td>
                                <input class="input is-rounded" type="text" id="title" name="title" onChange={this.handleTitleChange} placeholder="Title" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="artist" name="artist"  onChange={this.handleArtistChange} placeholder="Artist" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="year" name="year"  onChange={this.handleYearChange} placeholder="Year" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="genre" name="genre"  onChange={this.handleGenreChange} placeholder="Genre" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="tags" name="tags"  onChange={this.handleTagsChange}placeholder="Tags" />
                            </td>
                            <td>
                                <input class="input is-rounded" type="text" id="url" name="url"  onChange={this.handleURLChange}placeholder="URL" />
                            </td>
                            <td>
                                <button id="add" class="button is-primary is-hovered formButton">Add</button>
                            </td>
                            <td>
                                <p></p>
                            </td>
                            <td>
                                Add to Home
                            </td>
                        </tr>
                    </thead>
                    <tbody id="tableBody"></tbody>
                </table>
                <div id="logoutWrapper">
                    <Link id="addNewUserWrapper" to="/signup">
                        <button id="addNewUser" class="button is-primary is-rounded">Add New User</button>
                    </Link>
                    <p/>
                    <button id="logout" class="button is-link is-hovered is-rounded formButton" onClick={this.logout}>Logout</button>
                </div>
            </div>
            
        );
    }
}

export default Admin;