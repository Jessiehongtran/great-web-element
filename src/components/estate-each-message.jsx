import React from 'react';

export default class EstateEachMessage extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    shortenText (text) {
        let maxChar = 25;
        let textArr = text.split("");
        let shortText = textArr.slice(0, maxChar).concat(['.','.','.']);
        return shortText.join("")
    }

    render () {

        const { message } = this.props;

        return (
            <div style={{ display: 'flex', margin: '20px 0' }}>
                <div style={{ marginRight: '10px' }}>
                    <img src={message.avatar} alt={message.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' }} />
                </div>
                <div>
                    <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '14px' }}>{message.name}</p>
                    <p style={{ margin: '0px', fontSize: '14px' }}>{this.shortenText(message.text)}</p>
                </div>
            </div>
        )
    }
}