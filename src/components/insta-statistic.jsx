import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default class InstaStatistic extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {

        const { data } = this.props;

        return (
            <div className="each-box" style={{ padding: '15px', borderRadius: '6px', width: '150px', margin: '10px', background: '#fff' }}>
                {data
                ? <div className="each-box wrapper" style={{ width: '100%',  }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <b style={{ marginRight: '40px', fontSize: '14px', color: '#676767' }}>{data.name}</b>
                        <FontAwesomeIcon icon={faInfo} style={{borderRadius: '50%', border: '1px solid grey', width: '15px', height: '15px', fontSize: '12px', padding: '2px', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px 0' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{data.number}</span>
                        <img src={data.chart_image} style={{ width: '80px' }} />
                    </div>
                    <a href={data.link} style={{ textDecoration: 'underline', color: '#676767', fontSize: '12px' }} >View Details</a>
                </div>
                : null }
            </div>
        )
    }
}