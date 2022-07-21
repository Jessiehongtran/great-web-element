import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiaHRyYW4yMTE5NCIsImEiOiJjbDV1MnIwMGwwYndsM2lwZDE5bTVpdmZqIn0.RjMVBRVfulmVRT-gWXnfMQ';

console.log('mapboxgl', mapboxgl);

export default class EstateMap extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            lng: -122.4194,
            lat:  37.7749,
            zoom: 9
        };
        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        })
    }

    render () {

        return (
            <div>
                <h2>Find the nearest of you</h2>
                <div ref={this.mapContainer} className="map-container" style={{ height: '400px'}} />
            </div>
        )
    }
}