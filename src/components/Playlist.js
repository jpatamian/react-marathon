import React from 'react';

const Playlist = props => {


  return(

    <div>
      <li className = {props.className} onClick={props.handlePlaylistSelect}> {props.name}</li>
    </div>

  )
}


export default Playlist;
