import React from 'react';
import Reviews from '../components/reviews';

export default class ResponsivePage extends React.Component {

    render(){
        return (
            <div style={{ padding: '40px', borderRadius: '14px', position: 'relative' }}>
                <div className="wrapper" style={{overflow: 'hidden', background: '#FFF4E3',}}>
                    <Reviews />
                </div>
            </div>
        )
    }
}