import React from "react";
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
    }
    //Get all tracks from /api/tracks/all
    componentDidMount() {
        console.log("ID Admin: " + this.state.adminId);
        if(this.state.adminId >= 0) {
            this.loadPage();
        }
    }

    loadPage () {
        this.renderTracks();
        document.getElementById("add").onclick = this.addTrack;
    }

    renderTracks() {
        fetch(path + "api/tracks/all")
            .then(res => res.json())
            .then(data => {
                for(let i = 0; i < data.length; i++) {
                    let body = document.getElementById("tableBody");
                    let tableRow = body.appendChild(document.createElement('tr'));
                    tableRow.id = data[i].id;
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
                    let deleteButton = document.createElement("button");
                    deleteButton.id = data[i].id + "delete";
                    deleteButton.className = "button is-primary formButton";
                    deleteButton.onclick = this.deleteTrack;
                    deleteButton.innerHTML = "Delete";
                    row.lastChild.appendChild(deleteButton);

                    row.appendChild(document.createElement('td'));
                    let editButton= document.createElement("button");
                    editButton.id = data[i].id + "edit";
                    editButton.className = "button is-primary formButton";
                    editButton.onclick = this.editTrack;
                    editButton.innerHTML = "Edit";
                    row.lastChild.appendChild(editButton);

                    row.appendChild(document.createElement('td'));
                    let checkboxLabel = document.createElement("label");
                    checkboxLabel.className = "checkbox";
                    
                    let checkbox = document.createElement("input");
                    checkbox.id = data[i].id + "addToHome";
                    checkbox.className = "checkbox is-primary";
                    checkbox.class = "checkbox";
                    checkbox.type = "checkbox";
                    checkbox.innerHTML = "Add";
                    checkbox.checked = data[i].onHome;
                    checkbox.onchange = this.updateOnHome;
                    row.lastChild.appendChild(checkboxLabel);
                    checkboxLabel.appendChild(checkbox);
                }
            });
    }

    deleteTrack(event) {
        this.closeAllAlerts();
        var td = event.target.parentNode;
        var tr = td.parentNode;
        fetch(path + "api/tracks/" +  tr.id.substring(0, event.target.id.length - 6), {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data <= 0) {
                document.getElementById("deleteSuccessAlert").style.display = "block";
            }
            else {
                document.getElementById("deleteFailureAlert").style.display = "block";
            }
        });
        tr.parentNode.removeChild(tr);

    }

    addTrack () {
        this.closeAllAlerts();
        //send post request to path + /api/tracks/add
        fetch(path + "api/tracks/save", {
            method: "POST",
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
                "onHome": false
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data >= 0) {
                document.getElementById("addSuccessAlert").style.display = "block";
                this.emptyTable();
                this.emptyForms();
                this.renderTracks();
            }
            else {
                document.getElementById("addFailureAlert").style.display = "block";
                this.emptyTable();
                this.renderTracks();
            }
        });
    }

    editTrack(event) {
        this.closeAllAlerts();
        this.setState({editing: true});
        var td = event.target.parentNode;
        var tr = td.parentNode;
        tr.style.display = "none";
        this.setState({
            id: tr.id,
            title: tr.childNodes[0].innerHTML,
            artist: tr.childNodes[1].innerHTML,
            year: tr.childNodes[2].innerHTML,
            genre: tr.childNodes[3].innerHTML,
            tags: tr.childNodes[4].innerHTML,
            url: tr.childNodes[5].innerHTML
        });
        let addButton = document.getElementById("add");
        addButton.innerHTML = "Save";
        addButton.onclick = this.saveEdits;
        document.getElementById("title").value = this.state.title;
        document.getElementById("artist").value = this.state.artist;
        document.getElementById("year").value = this.state.year;
        document.getElementById("genre").value = this.state.genre;
        document.getElementById("tags").value = this.state.tags;
        document.getElementById("url").value = this.state.url;

    }

    updateOnHome(event) {      
        this.closeAllAlerts();
        this.setState({editing: true});
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

    saveEdits() {
        this.closeAllAlerts();
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
        .then(res => res.json())
        .then(data => {
            if(data.id == this.state.id) {
                document.getElementById("updateSuccessAlert").style.display = "block";
                this.emptyTable();
                this.emptyForms();
                this.renderTracks();
            }
            else {
                document.getElementById("updateFailureAlert").style.display = "block";
                this.emptyTable();
                this.renderTracks();
            }
        });
        let addButton = document.getElementById("add");
        addButton.innerHTML = "Add";
        addButton.onclick = this.addTrack;
    }

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

    emptyTable() {
        document.getElementById("tableBody").innerHTML = "";
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleArtistChange(event) {
        this.setState({artist: event.target.value});
    }

    handleYearChange(event) {
        this.setState({year: event.target.value});
    }

    handleGenreChange(event) {
        this.setState({genre: event.target.value});
    }

    handleTagsChange(event) {
        this.setState({tags: event.target.value});
    }

    handleURLChange(event) {
        this.setState({url: event.target.value});
    }

    closeAddSuccessAlert() {
        document.getElementById("addSuccessAlert").style.display = "none";
    }

    closeAddFailureAlert() {
        document.getElementById("addFailureAlert").style.display = "none";
    }

    closeDeleteSuccessAlert() {
        document.getElementById("deleteSuccessAlert").style.display = "none";
    }

    closeDeleteFailureAlert() {
        document.getElementById("deleteFailureAlert").style.display = "none";
    }

    closeUpdateSuccessAlert() {
        document.getElementById("updateSuccessAlert").style.display = "none";
    }

    closeUpdateFailureAlert() {
        document.getElementById("updateFailureAlert").style.display = "none";
    }

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
            </div>
            
        );
    }
}

export default Admin;