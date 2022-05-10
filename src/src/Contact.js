
import Title from "./Title.js";
import Content from "./Content";
import React from "react";

import "./Contact.css";

const path = "http://localhost:8080/";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      use: "",
      instrumentType: "",
      musicType: "",
      occasion: "",
      otherDetails: "",
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUseChange = this.handleUseChange.bind(this);
    this.handleInstrumentTypeChange = this.handleInstrumentTypeChange.bind(this);
    this.handleOtherDetailsChange = this.handleOtherDetailsChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.clearFields = this.clearFields.bind(this);

  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleUseChange(event) {
    this.setState({use: event.target.value});
  }

  handleInstrumentTypeChange(event) {
    this.setState({instrumentType: event.target.value});
  }

  handleOtherDetailsChange(event) {
    this.setState({otherDetails: event.target.value});
  }

  clearFields() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      use: "",
      instrumentType: "",
      musicType: "",
      occasion: "",
      otherDetails: "",
    });
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("commercial").checked = false;
    document.getElementById("education").checked = false;
    document.getElementById("personal").checked = false;
    document.getElementById("insType").value = "";
    document.getElementById("musicType").value = "Jazz";
    document.getElementById("occasion").value = "TV Commercial";
    document.getElementById("otherDetails").value = "";

  }

  submitForm() {
    fetch(path + "api/music/request", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          use: this.state.use,
          instrumentType: this.state.instrumentType,
          musicType: document.getElementById("musicType").value,
          occasion: document.getElementById("occasion").value,
          otherDetails: this.state.otherDetails,
          }),
      })
      window.location.href = "/";
      this.clearFields();
      
  }


  render() {
    const title = Title("Contact","Customize Your Music");

    const content = Content(
      <div class = "container">
      <div class = "row">
        <div class ="col">
          <label style={{color: "white"}}><b>First Name</b></label> <br></br>
          <input type = "text" id = "fname" class="input is-rounded" onChange={this.handleFirstNameChange}></input>
        </div>
        <div class ="col">
          <label style={{color: "white"}}><b>Last Name</b></label> <br></br>
          <input type = "text" id = "lname" class="input is-rounded" onChange={this.handleLastNameChange}></input>
        </div>
        <div class = "row">
          <div class ="col">
          <br></br>
          <b style={{color: "white"}}>Email</b>  
          </div>
        </div>
        <div class = "row">
          <div class ="col">
            <input type = "email" id = "email" class="input is-rounded" onChange={this.handleEmailChange}></input>
          </div>
        </div>
        <div class = "row">
          <div class ="col">
            <br></br>
            <label style={{color: "white"}}><b>Music is for?</b></label><br></br>
            <input type = "radio" id = "commercial" name="use" value="Commercial" onChange={this.handleUseChange}></input><label style={{color: "white"}}>&nbsp;&nbsp;Commercial Use</label><br></br>
            <input type = "radio" id = "education" name="use" value="Education" onChange={this.handleUseChange}></input><label style={{color: "white"}}>&nbsp;&nbsp;Education Use</label><br></br>
            <input type = "radio" id = "personal" name="use" value="Personal" onChange={this.handleUseChange}></input><label style={{color: "white"}}>&nbsp;&nbsp;Personal Use</label><br></br>
          </div>
        </div>
        <div class = "row">
          <div class ="col">
            <br></br>
            <label style={{color: "white"}}><b>Instrument Type (eg: piano, vocal, etc)</b></label> <br></br>
            <input type = "text" id = "insType" class="input is-rounded"  onChange={this.handleInstrumentTypeChange}></input>
          </div>
        </div>
        <div class = "row">
          <div class = "col">
            <br></br>
            <label style={{color: "white"}}><b>Music Type</b></label><br></br>
            <select id="musicType" onChange={this.handleMusicTypeChange}>
              <option value="Jazz">Jazz</option>
              <option value="Classical">Classical</option>
              <option value="Orchestral">Orchestral</option>
              <option value="Pop">Pop</option>
              <option value="World">World</option>
              <option value="Folk">Folk</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div class = "row">
          <div class = "col">
            <br></br>
            <label style={{color: "white"}}><b>Occasion/Platform</b></label><br></br>
            <select id="occasion" onChange={this.handleOccasionChange}>
              <option value="TV Commercial">TV Commercial</option>
              <option value="Wedding">Wedding</option>
              <option value="Student Film">Student Film</option>
              <option value="YouTube">YouTube</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div class = "row">
          <div class ="col">
            <br></br>
            <label style={{color: "white"}}><b>What else would you like us to know?</b></label><br></br>
            <input type="text" id="otherDetails" class="input is-rounded" onChange={this.handleOtherDetailsChange} placeholder="Enter details here..."/>
            <br></br>
          </div>
        </div>
        <div class="row">
          <div class="col" id="submitWrapper">
            <br/>
            <br/>
            <br/>
            <button id="submitButton" type="button" class="button is-primary is-rounded" onClick={this.submitForm}> Submit</button>
          </div>
        </div>
      </div>
      
      </div>
    )
    return (
      <div>
        {title}
        {content}
      </div>
    );
  }
}

export default Contact;