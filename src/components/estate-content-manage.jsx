import React from 'react';
import '../styles/estate-content-manage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default class EstateContentManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <input style={{ width: '300px', height: '40px', borderRadius: '6px', padding: '0 20px', border: 'none', marginRight: '20px' }} placeholder="Search Apartment, house..." />
                <div style={{ display: 'flex', width: '180px', justifyContent: 'space-between'}}>
                    <div>
                        <label class="switch" style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px'}}>
                            <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                            <div class="slider">
                                <span class="text left">Buyer</span>
                                <span class="text right">Seller</span>
                            </div>
                        </label>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '6px', padding: '8px 12px', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faBell} style={{ zIndex: 4, color: '#5B5B5B' }}/>
                    </div>
                </div>
            </div>
        )
    }
}