import React from "react";

class SongPlayer extends React.Component{

    render(){
        const {song, singer, name} = this.props.currentlyPlaying;

        return (
            <div className="currentlyPlaying">
                <div>
                <h1>CUrrently Playing: </h1>
                <h1>{song} - {singer}</h1>
                <h4>{name}</h4>
                </div>
                <div>
                <img src="/images/mic.png" alt="Mic" className="icon-song"/>
                </div>
            </div>
        )
    }

}

export default SongPlayer;