import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEllipsisH, faLongArrowUp, faMapMarker, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import RecentMessages from './estate-recent-messages';

export default class EstateUtility extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div style={{ width: '350px', padding: '20px', boxSizing: 'border-box', color: '#393838' }}>
                <div className="balance" style={{ width: '100%'}}>
                    <div className="title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3>Your Balance</h3>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                    <div style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}>
                        <div style={{ border: '1px solid silver', borderRadius: '6px', padding: '10px', width: '100%', boxSizing: 'border-box' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Payment ID: j45CH686</span>
                                <span>
                                    <FontAwesomeIcon icon={faCopy} />
                                </span>
                            </div>
                            <h2>
                                $615,245.287
                            </h2>
                            <div>
                                <span style={{ borderRadius: '50%', background: '#C6FCD5', textAlign: 'center' }}>
                                    <FontAwesomeIcon icon={faLongArrowUp} style={{ color: '#488358', fontSize: '12px', width: '20px' }} />
                                </span>
                                <span style={{ color: '#488358' }}> +12.5%</span>
                                <span> than last week</span>
                            </div>
                        </div>
                        <div style={{ color: '#0683E6', background: '#DFEFFB', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 15px', borderRadius: '6px', marginTop: '20px', fontWeight: 'bold' }}>
                                <Link to="" style={{ textDecoration: 'none', color: 'inherit' }} >
                                    Top up balance
                                </Link>
                            </div>
                    </div>
                </div>
                <RecentMessages />
                <div className="ad" style={{ background: '#0F5E9A', borderRadius: '6px', padding: '20px', boxSizing: 'border-box', color: '#fff', opacity: 0.9, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '40px' }}>
                    <div style={{ background: '#fff', padding: '6px 10px', borderRadius: '6px' }}>
                        <FontAwesomeIcon icon={faMapMarker} style={{ color: '#0F5E9A' }} />
                    </div>
                    <h2>Search and find your favorite real estate</h2>
                    <p>Search by category you like and find the best place with us</p>
                    <div>
                        <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Learn more</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
            </div>
        )
    }
}