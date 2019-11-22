import React from "react";
import SongRequest from './SongRequest';
import SampleSongs from '../SampleSongs';
import base from '../base';
import RoomPlayer from "./RoomPlayer";

class App extends React.Component{

    state = {
        songs: {},
        currentlyPlaying: {}
    }

    componentDidMount() {
        const { params } = this.props.match;
    
        this.ref = base.syncState(`${params.roomId}/songs`, {
          context: this,
          state: "songs"
        });

        this.ref = base.syncState(`${params.roomId}/currentlyPlaying`, {
            context: this,
            state: "currentlyPlaying"
          });
      }
        
      componentWillUnmount() {
        base.removeBinding(this.ref);
      }
    

    loadSampleMusics = () => {
         this.setState({ songs: SampleSongs });
         console.log('musics');
    }

    playSong = key => {

        const songs = { ...this.state.songs };

        const currentlyPlaying = songs[key];
        songs[key] = null;
        
        this.setState({songs});
        this.setState({currentlyPlaying});
    }

    removeSong = key => {
        
        const songs = { ...this.state.songs };

        songs[key] = null;
        
        this.setState({songs});
    }

    requestSong = song => {
        console.log('Adding song');
        const songs = { ...this.state.songs };
        const songId = Date.now();
        song.id = songId;
        songs[`song${Date.now()}`] = song;

        this.setState({songs});
    }

    render(){
        return (
            <div>
                <div className="catch-of-the-day">
                    <RoomPlayer 
                        songs={this.state.songs} 
                        currentlyPlaying={this.state.currentlyPlaying}
                        playSong={this.playSong} 
                        removeSong={this.removeSong}/>
                    <SongRequest 
                        requestSong={this.requestSong}  
                        loadSampleMusics={this.loadSampleMusics} />

                </div>
            </div>
        )
    }

}

export default App;