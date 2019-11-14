import React from 'react';
import { getFunName } from '../helpers';
class RoomPicker extends React.Component{

    myInput = React.createRef();

    goToRoom = event => {
        event.preventDefault();
        
        const storeName = this.myInput.current.value;
        
        this.props.history.push(`/room/${storeName}`);
    }

    render(){
        return (
                <form className="store-selector" onSubmit={this.goToRoom}>
                    <h2>Please enter a room</h2>
                    <input 
                        type="text"
                        ref={this.myInput} 
                        required 
                        placeholder="Room Name" 
                        defaultValue={getFunName()}/>
                    <button type="submit">Lett's sing!</button>
                </form>
            
        )            
    }
}

export default RoomPicker;