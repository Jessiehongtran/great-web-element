import React from 'react';
import { reviews } from '../data/reviews';
import Review from '../components/review';

export default class Reviews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            x: 0
        }
    }


    render(){

        const { x } = this.state;
        let cardWidth = 500;

        return (
            <div style={{  }}>
                <div style={{ display: 'flex' }}>
                {reviews.map((eachReview,i) => <Review review={eachReview} x={(i-1)*cardWidth*1.2+40+ x} />)}
                </div>
            </div>
        )
    }
}