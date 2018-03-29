import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlistArray = this.props.playlists.map((playlist) => {
      let className = ""
      if (playlist.id === this.props.selectedPlaylistId){
        className = "selected"
      }

      let handlePlaylistSelect = () => this.props.handlePlaylistSelect(playlist.id)

      return(
        <Playlist
          key = {playlist.id}
          name = {playlist.name}
          className = {className}
          handlePlaylistSelect = {handlePlaylistSelect}

        />
      )
    })
    return(
      <div>
        <ul> {playlistArray} </ul>
      </div>
    )
  }
}

export default PlaylistCollection;
