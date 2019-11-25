import React from 'react';
import AddSongForm from './AddSongForm';
import SongPlayer from './SongPlayer';

class SongRequest extends React.Component{

    render(){
        return (
            <div>
                <div className="inventory">
                    <h2>Request your song!</h2>
                    <AddSongForm requestSong={this.props.requestSong}/>
                    <button onClick={this.props.loadSampleMusics}>Load sample musics</button>
                </div>
                <SongPlayer currentlyPlaying={this.props.currentlyPlaying}/>
            </div>
            
        )            
    }
}

export default SongRequest;