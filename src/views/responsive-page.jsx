import React from 'react';
import Reviews from '../components/reviews';

export default class ResponsivePage extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div style={{background: '#FFF4E3', padding: '40px', borderRadius: '14px' }}>
                <div className="wrapper" style={{overflow: 'hidden'}}>
                <Reviews />
                </div>
            </div>
        )
    }
}