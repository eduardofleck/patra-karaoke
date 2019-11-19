import React from "react";
import QRCode from "qrcode";

class QRCodeImage extends React.Component{

    qrCodeDataRef = React.createRef();
    
    componentDidMount() {
        QRCode.toDataURL(window.location.href)
        .then(url => {
            this.qrCodeDataRef = url;
        })
        .catch(err => {
            console.error(err)
        })
    }

    render(){
        return (
        <div className="qrcode">
            <div className="qrcode-inner">
                <img src={this.qrCodeDataRef} alt={window.location.href}/>
            </div>
            <h1>Scan me</h1>
        </div>)
    }

}

export default QRCodeImage;