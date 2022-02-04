import React, { Component} from "react";
import WaveSurfer from "wavesurfer.js";


class Song extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      wavesurfer: WaveSurfer.create({
        container: "#"+props.container,
        waveColor: 'violet',
        progressColor: 'purple',
        barHeight: 1,
        fillParent: true,
        height: 75,
        barWidth: 3,
        responsive:true,
        hideScrollbar: true,
        barRadius: 1,
      }),
      container: document.getElementById(props.container),
    }
    console.log(this.props.name);
    this.state.wavesurfer.load(this.props.file);
    //this.state.container.style.display = 'none';
    console.log(this.state.container.style.display);

  }

  buttonClick(){
      this.setState({active: true});
      this.state.wavesurfer.playPause();
      this.state.container.style.display = "block";
      this.props.onPlay(this);
      console.log(this.props.playlist);
  }

  closeContainer(){
      this.state.container.style.display = "none";
  }

  stop(){
    this.state.wavesurfer.stop();
  }
  
  render(){
    return(
      <div>
        <button id = {this.props.buttonID} class = "button" onClick={() => { this.buttonClick();}}>Play/Pause</button>
        <em>{this.props.name}</em>
      </div>
    )
  } 
    
}

export default Song;
