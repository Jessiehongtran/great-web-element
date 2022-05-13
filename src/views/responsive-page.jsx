import React from 'react';
import Reviews from '../components/reviews';

export default class ResponsivePage extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div>
                <Reviews />
            </div>
        )
    }
}