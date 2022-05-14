import React from 'react';
import { reviews } from '../data/reviews';
import Review from '../components/review';

export default class Reviews extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div style={{display: 'flex' }}>
                {reviews.map(eachReview => <Review review={eachReview} />)}
            </div>
        )
    }
}