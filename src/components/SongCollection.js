import React from 'react'
import Song from './Song'

class SongCollection extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let arrayOfSongs = this.props.songs.map(song =>{
      let className = ""
      if (song.id === this.props.selectedSongId){
        className = "selected"
      }
      let handleSongSelect = () => this.props.handleSongSelect(song.id)

      return(
        <Song
           key = {song.id}
           name = {song.name}
           artist = {song.artist}
           className = {className}
           handleSongSelect = {handleSongSelect}
        />
      )
    }

    )
    return(
      <div>
        <ul>{arrayOfSongs}</ul>
      </div>
    )

  }
}
export default SongCollection
