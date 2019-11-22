import React from "react";
import Header from './Header';
import Song from './Song';
import QRCodeImage from './QRCodeImage';
import SongPlayer from './SongPlayer';

class RoomPlayer extends React.Component{

   
    render(){
        return (
            
                <div className="Menu">
                    <Header tagline="Best karaoke room in town!"/>
                    <SongPlayer currentlyPlaying={this.props.currentlyPlaying}></SongPlayer>
                    <ul className="fishes">
                        {Object.keys(this.props.songs).map(key => <Song key={key} 
                                                                        index={key} 
                                                                        playSong={this.props.playSong}
                                                                        details={this.props.songs[key]} 
                                                                        removeSong={this.props.removeSong}/>)}
                    </ul>
                    <QRCodeImage></QRCodeImage>
                </div>
        )
    }

}

export default RoomPlayer;