import React from "react";
import Song from "./Song";

function Playlist(sourcefolder) {
  const songs = [
    
  ];

  
  return (
    <div>

    {Song(sourcefolder + "/01.mp3","song 1")}
    {Song(sourcefolder + "/02.mp3","song 2")}
    {Song("./music/03.mp3","song 3")}
    {Song("./music/04.mp3","song 4")}
    {Song("./music/05.mp3","song 5")}
    {Song("./music/06.mp3","song 6")}
    {Song("./music/07.mp3","song 7")}
    {Song("./music/08.mp3","song 8")}
    </div>

  );
  
}

export default Playlist;
