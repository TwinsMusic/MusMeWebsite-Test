import React, { Component} from "react";
import WaveSurfer from "wavesurfer.js";


class Song extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      wavesurfer: WaveSurfer.create({
        container: "#"+props.container,
        waveColor: 'white',
        progressColor: '#01BBC2',
        barHeight: 1,
        fillParent: true,
        height: 75,
        barWidth: 1,
        responsive:true,
        hideScrollbar: true,
        barRadius: 1,
        barGap: 0,
        cursorColor: 'white',
      }),
      container: document.getElementById(props.container),
      currentIcon: 'play_arrow',
    }
    console.log(this.props.name);
    this.state.wavesurfer.load(this.props.file);
    //this.state.container.style.display = 'none';
    console.log(this.state.container.style.display);

  }

  buttonClick(){
      if(this.state.currentIcon == 'play_arrow'){
        this.setState({currentIcon: 'pause'})
      }
      else{
        this.setState({currentIcon: 'play_arrow'})
      };
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
        <button id = {this.props.buttonID} class = "button has-text-dark" onClick={() => { this.buttonClick();}}>
        <span class="material-icons">
{this.state.currentIcon}
</span>
        </button>
        <div class = "block pl-5 pt-1 is-size-5" style = {{display: "inline-block"}}>{this.props.name}</div>
      </div>
    )
  } 
    
}

export default Song;
