import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';


class Waveform extends Component {  
  state = {
    playing: false,
  };
 

  componentDidMount() {
    const track = document.querySelector('#track');

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 80,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });

  };
  
  handlePlay = () => {
    const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";
    this.waveform.load(<audio id="track" src={url} />);
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
    document.getElementById("waveform").style.display = "block";
  };

  render() {
    

    return (
      <div>
        <div onClick={this.handlePlay} >
          {!this.state.playing ? 'Play' : 'Pause'}
        </div>
        <div id="waveform" />
          
      </div>
    );
  }
};

export default Waveform;