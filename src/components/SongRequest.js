import React from 'react';
import AddSongForm from './AddSongForm';


class SongRequest extends React.Component{

    render(){
        return (
                <div className="inventory">
                    <h2>Request your song!</h2>
                    <AddSongForm requestSong={this.props.requestSong}/>
                    <button onClick={this.props.loadSampleMusics}>Load sample musics</button>
                </div>
        )            
    }
}

export default SongRequest;