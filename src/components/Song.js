import React from "react";

class Song extends React.Component{

handleClick = () => {
    this.props.removeSong(this.props.details);
}

    render(){
        const {song, singer, name} = this.props.details;

        return (
            <li className="menu-fish">
                <h4>{song} - {singer} - {name}</h4>
                <button onClick={this.handleClick}>Remove</button>
            </li>
        )
    }

}

export default Song;