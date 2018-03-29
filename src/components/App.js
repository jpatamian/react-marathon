import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)

  }

  handleSongSelect(id) {
    this.setState( {selectedSongId: id } )
  }

  handlePlaylistSelect(id) {
    this.setState( {selectedPlaylistId: id } )
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {

      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);
    let selectedSongId = this.state.selectedSongId
    let selectedPlaylistId = this.state.selectedPlaylistId;

    return (
      <div className="App row">
        <div className = "columns medium-6">
          <h1>Playlist Portion</h1>
          <PlaylistCollection
            playlists = {data.playlists}
            selectedPlaylistId = {selectedPlaylistId}
            handlePlaylistSelect = {this.handlePlaylistSelect}
          />
        </div>
        <div className="columns medium-6">
          <h1>Songs</h1>
          <SongCollection
            songs={selectedPlaylistSongs}
            selectedSongId = {selectedSongId}
            handleSongSelect = {this.handleSongSelect}
          />
         </div>
      </div>
    );
  }
}

export default App;
