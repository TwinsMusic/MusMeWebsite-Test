import React, {useState} from "react";
import Title from "./Title.js";
import Playlist from "./Playlist";
import Content from "./Content";

//IMPORT ALL MP3 FILES HERE
import song1 from "./featured/01.mp3";
import song2 from "./featured/02.mp3";
import song3 from "./featured/03.mp3";
import song4 from "./featured/04.mp3";

class HappyMood extends React.Component {
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
    
  
    const title = Title("Moods","Happy Mood");


    const content = Content(
    <div class = "columns">
      
      <div class = "column"style = {{paddingTop: 5, textAlign: "center", color: "white"}} id = "homecontent">
          <img src="/images/browse/moods/happy.jpg"></img>
     </div> 
      <div class = "column" id = "musicsamples">
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

export default HappyMood;
