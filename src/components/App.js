import React from "react";
import Header from './Header';
import MusicChart from './MusicChart';
import Song from './Song';
import SampleSongs from '../SampleSongs';
import base from '../base';

class App extends React.Component{

    state = {
        songs: {}
    }

    componentDidMount() {
        const { params } = this.props.match;
    
        this.ref = base.syncState(`${params.roomId}/songs`, {
          context: this,
          state: "songs"
        });
      }
        
      componentWillUnmount() {
        base.removeBinding(this.ref);
      }
    

    loadSampleMusics = () => {
         this.setState({ songs: SampleSongs });
         console.log('musics');
    }

    removeSong = songToRemove => {
        console.log('Removing song');
        console.log(songToRemove.id);

        const songs = Array.from({ ...this.state.songs });
        
        songs.forEach(s => {
            if(s.id === songToRemove.id) {
                console.log(1);
              songs.push(s);
            }
        });


        this.setState({songs : songs});
        
        console.log(songs);
        
        console.log(this.state.songs);
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
            <div className="catch-of-the-day">
                <div className="Menu">
                    <Header tagline="Best karaoke room in town!"/>
                    <ul className="fishes">
                        {Object.keys(this.state.songs).map(key => <Song key={key} 
                                                                        index={key} 
                                                                        details={this.state.songs[key]} 
                                                                        removeSong={this.removeSong}/>)}
                    </ul>
                </div>
                <MusicChart 
                    requestSong={this.requestSong}  
                    loadSampleMusics={this.loadSampleMusics} />
            </div>
        )
    }

}

export default App;