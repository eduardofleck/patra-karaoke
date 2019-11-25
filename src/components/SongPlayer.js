import React from "react";

class SongPlayer extends React.Component{

    render(){
        const {song, singer, name} = this.props.currentlyPlaying;

        return (
            <div className="centered">
                <div className="currently-playing">
                    <div>
                        <h1>NOW Playing</h1>
                        <h1>{song} - {singer}</h1>
                        <h1>{name}</h1>
                    </div>
                    <div className="icon-song">
                        <img src="/images/mic.png" alt="Mic" className="icon-song"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default SongPlayer;