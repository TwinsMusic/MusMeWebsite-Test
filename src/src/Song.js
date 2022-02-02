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
      }),
    }
    console.log(this.props.name);
    this.state.wavesurfer.load(this.props.file);

  }
  
  render(){
    return <button id = {this.props.buttonID} class = "button" onClick={() => {this.state.wavesurfer.playPause();}}>Play/Pause</button>
  }

}

export default Song;
