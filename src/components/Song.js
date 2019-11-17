import React from "react";

class Song extends React.Component{

handleClick = () => {
    this.props.removeSong(this.props.index);
}

    render(){
        const {song, singer, name} = this.props.details;

        return (
            <li className="menu-fish">
                <div className="song">
                    <div>
                        <img src="/images/vinyl.png" alt="Vinyl"/>
                    </div>
                    <div>
                        <div className="song-info">
                            <div>
                                {song} - {singer}
                            </div>
                            <div>
                                {name}
                            </div>
                            <div>
                                <button onClick={this.handleClick}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

}

export default Song;