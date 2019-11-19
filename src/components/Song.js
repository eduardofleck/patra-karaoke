import React from "react";

class Song extends React.Component{

handleRemove = () => {
    this.props.removeSong(this.props.index);
}

handlePlaySong = () => {
    this.props.playSong(this.props.index);
}

    render(){
        const {song, singer, name} = this.props.details;

        return (
            <li className="menu-fish">
                <div className="song">
                    <div>
                        <img src="/images/vinyl.png" alt="Vinyl" className="icon-song"/>
                    </div>
                    <div>
                        <div className="song-info">
                            <div>
                                {song} - {singer}
                            </div>
                            <div>
                                {name}
                            </div>
                            <div className="container">
                                <div>
                                    <button onClick={this.handlePlaySong}>Play</button>
                                </div>
                                <div>
                                    <button onClick={this.handleRemove}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

}

export default Song;