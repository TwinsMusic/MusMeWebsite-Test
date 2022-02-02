import React from "react";

import Song from "./Song";

//songarr should be [{file: "filename", song: "songname"}]
//PROPS Must include songarr
class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: new Array(1)
    }
  }
  componentDidMount(){
    var songarr = this.props.songarr;
    var length = songarr.length;
    
      const newsongs = new Array(length);
      for(let i = 0; i < length; i++){
        newsongs[i] =  
        (
        <div>
          
          <div id = {"wavesurfer"+i+"controls"}>
          
            
          <Song file = {songarr[i].file} name = {songarr[i].name}
               container = {"wavesurfer"+i+"wave"} buttonID = {"wavesurfer"+i+"button"}/>
            

          </div>
        </div>);
      }
      this.setState({songs: newsongs})
  }

  render(){
    var songarr = this.props.songarr;
    var length = songarr.length;
    var divs = new Array(length);
    for(let i = 0; i < length; i++){
      divs[i] = 
      <div class = {"wavesurfer"+i+" box has-text-centered"}>
        <span class = "block"><em>{songarr[i].name}</em></span>
        <div id = {"wavesurfer"+i+"wave"}>
        {}
        </div>
        {this.state.songs[i]}
      </div>
    }
    return divs;
  }

}
export default Playlist;

