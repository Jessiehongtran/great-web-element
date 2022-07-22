import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

export default class EstatePopularEachItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { item } = this.props;

        return (
            <div style={{ margin: '0 20px 20px 0', padding: '15px', borderRadius: '6px', background: '#fff', width: '220px', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                <div>
                    <div class="house-image-container" style={{ position: 'relative', width: '100%', height: '150px', objectFit: 'contain' }}>
                        <img class="house" style={{  width: '100%', height: '100%', borderRadius: '6px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }} src={item.image_url} alt={item.name}/>
                        <div class="price" style={{ position: 'absolute', right: '10px', bottom: '10px', background: '#fff', borderRadius: '6px', padding: '8px 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', opacity: 0.8 }}>
                            <span class="price-text" style={{ fontWeight: 'bold', color: '#393838'}}>${Number(parseFloat(item.price).toFixed(2)).toLocaleString('en', {
                                minimumFractionDigits: 2
                            })}</span>
                        </div>
                    </div>
                    <p style={{ fontWeight: 'bold', color: '#393838'}}>{item.name}</p>
                    <div class="address-container" style={{ color: '#393838', fontSize: '14px' }}>
                        <FontAwesomeIcon icon={faMapMarker} style={{ marginRight: '5px' }}/>
                        <span class="address" style={{ lineHeight: '160%' }}>{item.address}</span>
                    </div>
                </div>
            </div>
        )
    }
}