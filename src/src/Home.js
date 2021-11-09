import React from "react";
import Title from "./Title.js";
import Playlist from "./Playlist";
import Content from "./Content";

function Home() {
  const title = Title("MusMe","Welcome to MusMe: the Library to Find the Soundtrack for You");
  const content = Content(
  <div class = "columns">
    <div class = "column"style = {{paddingTop: 5, textAlign: "center"}} id = "homecontent">
      <div class = "box" style = {{paddingTop: 10}}>
        <p>MusMe is an <h2 style = {{paddingTop: 10}}>affordable, subscription-based, royalty-free music library</h2> powered by TwinsMusic Enterprises, based in Pelham, New York, USA.</p>
      </div>
      <div class = "box"style = {{paddingTop: 10}}>
        <p> The library features original music, sound bites, ringtones, and sound effects fit for <h2 style = {{paddingTop: 10}}>hundreds of moods and settings.</h2></p>
      </div>
      <div class = "box"style = {{paddingTop: 10}}>
        <p> MusMe sets itself apart from other music libraries because all music in the library is <h2 style = {{paddingTop: 10}}>original acoustic music.</h2> </p>
      </div>
      <div class = "box"style = {{paddingTop: 10}}>
        <p>Each month, the MusMe team updates the library with <h2 style = {{paddingTop: 10}}>refreshing new music and sounds</h2 > so users will never run out of new content. </p>
      </div>
   
    </div>
    <div class = "column" id = "musicsamples">
      <div class = "title" style = {{textAlign: "center"}}>
        Featured Sounds
      </div>
      <div id = "waveform"style = {{display: 'none'}}>
        
      </div>
      <div class = "box">
        {Playlist("./featured")}
      </div>
    </div>
    
  </div>

  );
  return (
    <div> 
      {title}
      {content}
    </div>
    

    
  );
}

export default Home;
