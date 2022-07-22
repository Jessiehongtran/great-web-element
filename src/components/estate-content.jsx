import React from 'react';
import Manage from './estate-content-manage';
import PopularItems from './estate-popular-houses';
import Map from './estate-map';

export default class EstateContent extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div style={{width: '850px', background: '#F0F4FD', minHeight: '100vh', padding: '20px' }}>
                <Manage />
                <PopularItems />
                <Map />
            </div>
        )
    }
}