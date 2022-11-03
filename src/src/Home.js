import React, {useState} from "react";
import Title from "./Title.js";
import Playlist from "./Playlist";
import Content from "./Content";
import Song from "./Song.js";

//IMPORT ALL MP3 FILES HERE
import song1 from "./featured/01.mp3";
import song2 from "./featured/02.mp3";
import song3 from "./featured/03.mp3";
import song4 from "./featured/04.mp3";

const path = "http://localhost:8080/";

/*var AWS = require("aws-sdk");
var albumBucketName = 'musme-test-bucket';
var albumName = 'songs-album';

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:e064c954-2612-4f03-a925-871da4a09a4e',
});

// Create a new service object
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

var song1Key = albumName + "/08.mp3";

var song1 = s3.listObjects({Bucket: albumBucketName, Key: song1Key}, function(err, data) {
  if (err) {
    return alert('There was an error viewing your album: ' + err.message);
  }
  else {
    console.log("Data!")
    console.log(data);
    return data;
  }
});*/

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songarr: [
        
          {
            file: song1,
           name: "Song One"
          },
          {
            file: song2,
            name: "Song Two"
          },
          {
            file: song3,
            name: "Song Three"
          },
          {
            file: song4,
            name: "Song Four"
          }
        
        ],  
      
      playPauseButtons: new Array(1),
      playPauseFunction: null,
      songs: new Array(1)
    }
    
    
  }
 
  render(){
    
  
    const title = Title("MusMe","Welcome to MusMe: the Library to Find the Soundtrack for You");


    const content = Content(
    <div class = "columns">
      
      <div class = "column"style = {{paddingTop: 5, textAlign: "center", color: "white"}} id = "homecontent">
          <div class = "block">
          <p>MusMe is an <h2 style = {{paddingTop: 10}}>affordable, subscription-based, royalty-free music library</h2> powered by TwinsMusic Enterprises, based in Pelham, New York, USA.</p>
        </div>
        <div class = "block"style = {{paddingTop: 20}}>
          <p> The library features original music, sound bites, ringtones, and sound effects fit for <h2 style = {{paddingTop: 10}}>hundreds of moods and settings.</h2></p>
        </div>
        <div class = "block"style = {{paddingTop: 10, color: "white"}}>
          <p> MusMe sets itself apart from other music libraries because all music in the library is <h2 style = {{paddingTop: 10}}>original acoustic music.</h2> </p>
        </div>
        <div class = "block"style = {{paddingTop: 10}}>
          <p>Each month, the MusMe team updates the library with <h2 style = {{paddingTop: 10}}>refreshing new music and sounds</h2 > so users will never run out of new content. </p>
        </div>
     </div>
  
      <div class = "column" id = "musicsamples">
        <div class = "title" style = {{textAlign: "center"}}>
          Featured Sounds
        </div>
        <div class = " has-text-light">
          <Playlist songarr = {this.state.songarr}/>
        </div>
  
        
  
  
      
    </div>
  </div>
    );
  
    return (
      <div class = "has-background-dark"> 
        {title}
        {content}
        {
          
        }
      </div>
      
  
      
    );
  }
  
}

export default Home;
