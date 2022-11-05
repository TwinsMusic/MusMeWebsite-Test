import React from 'react';
import logo from './resources/iconpause.png';
import listAlbums, {viewAlbum} from './PhotoViewer'
//import './App.css';

function App() {
  //listAlbums()
  viewAlbum('album1')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
      <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1241.0.min.js"></script>
      <script src="./PhotoViewer.js"></script>
      <h1>Photo Album Viewer</h1>
      <div id="test"/>
      <div id="viewer"/>
    </div>
  );
}

export default App;