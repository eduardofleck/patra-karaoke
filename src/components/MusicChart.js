import React from 'react';
import AddMusicForm from './AddMusicForm';

class MusicChart extends React.Component{

    render(){
        return (
                <div className="inventory">
                    <h2>Request your song!</h2>
                    <AddMusicForm requestSong={this.props.requestSong}/>
                    <button onClick={this.props.loadSampleMusics}>Load sample musics</button>
                </div>
        )            
    }
}

export default MusicChart;