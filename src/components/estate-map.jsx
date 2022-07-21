import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

mapboxgl.accessToken = 'pk.eyJ1IjoiaHRyYW4yMTE5NCIsImEiOiJjbDV1MnIwMGwwYndsM2lwZDE5bTVpdmZqIn0.RjMVBRVfulmVRT-gWXnfMQ';

console.log('mapboxgl', mapboxgl);

export default class EstateMap extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            lng: -122.4194,
            lat:  37.7749,
            zoom: 9,
            city: '',
            state: '',
            country: ''
        };
        this.mapContainer = React.createRef();
        this.getGeoInfo = this.getGeoInfo.bind(this);
        this.getMapBox = this.getMapBox.bind(this);
    }

    getMapBox = () => {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        })
    }

    getGeoInfo = () => {
        axios.get('https://api.ipregistry.co/?key=tryout')
             .then(response => {
                let data = response.data;
                this.setState({
                    city: data.location.city,
                    state: data.location.region.name,
                    country: data.location.country.name
                })
             })
             .catch(err => {
                console.log(err)
             })
    }

    componentDidMount() {
        this.getMapBox()
        this.getGeoInfo()
    }

    render () {

        const { city, state, country } = this.state;

        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2 style={{ marginRight: '10px' }}>Find the nearest of you</h2>
                    <div style={{ marginBottom: '-5px', color: '#097FDE' }}>
                        <FontAwesomeIcon icon={faMapMarker} style={{ marginRight: '5px' }}/>
                        <span>{city}, {state}, {country}</span>
                    </div>
                </div>
                <div ref={this.mapContainer} className="map-container" style={{ height: '400px'}} />
            </div>
        )
    }
}