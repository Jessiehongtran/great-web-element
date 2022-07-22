import React from 'react';
import { messages } from '../data/messages';
import EachMessage from './estate-each-message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default class EstateRecentMessages extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <div className="title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Recent Messages</h3>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
                {messages.map(message => <EachMessage message={message} />)}
            </div>
        )
    }
}