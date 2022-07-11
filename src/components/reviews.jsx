import React from 'react';
import { reviews } from '../data/reviews';
import Review from '../components/review';

export default class Reviews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
        this.moveLeft = this.moveLeft.bind(this);
    }

    componentDidMount(){
        this.moveLeft()
    }

    moveLeft() {
        console.log(this.state.x)
        if (this.state.x > -100) {
            this.setState({x: this.state.x - 1})
        } else {
            this.setState({x: 100})
        }

        setTimeout(this.moveLeft, 80);
    }

    render(){

        const { x, y } = this.state;

        return (
            <div style={{  }}>
                <div style={{ display: 'flex', position: 'absolute', left: `${x}%`, top: `${y}%`, transition: 'all 1s ease-in-out' }}>
                {reviews.map(eachReview => <Review review={eachReview} />)}
                </div>
            </div>
        )
    }
}