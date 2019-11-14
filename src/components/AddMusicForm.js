import React from 'react';

class AddMusicForm extends React.Component{

    songRef = React.createRef();
    singerRef = React.createRef();
    nameRef = React.createRef();

    requestSong = (event) => {
        event.preventDefault();

        const requestedSong = {
            song: this.songRef.current.value,
            singer: this.singerRef.current.value,
            name: this.nameRef.current.value
        }

        this.props.requestSong(requestedSong);

        event.currentTarget.reset();

        console.log(requestedSong);
    }

    render(){
        return (
                <form onSubmit={this.requestSong}>
                    <input name="song" ref={this.songRef} type="text" placeholder="Song"/>
                    <input name="singer" ref={this.singerRef} type="text" placeholder="Singer"/>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                    <button type="submit">Request!</button>
                </form>
        )            
    }
}

export default AddMusicForm;