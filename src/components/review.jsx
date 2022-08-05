import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            turn: false,
            x: this.props.x
        }
        this.moveLeft = this.moveLeft.bind(this);
    }

    componentDidMount(){
        this.moveLeft()
    }

    moveLeft() {
        const speed = 0.8;
        const durationToNextItem = 0;
        const { x } = this.state;
        const { cardWidth, totalReviews } = this.props;

        if (x > - cardWidth*(totalReviews - 1)) {
            this.setState({x: x - speed})
        } else {
            this.setState({x: 900})
        }

        setTimeout(this.moveLeft, durationToNextItem);
    }

    render(){

        const { x } = this.state;
        const { review, cardWidth } = this.props;
        const fullStarNum = Math.floor(review.rating)
        const fullStars = Array.apply(0, Array(fullStarNum));
        const halfStars = Array.apply(0, Array(5 - fullStarNum))
       
        return (
            <div style={{ margin: '10px', padding: '30px', width: `${cardWidth}px`, borderRadius: '12px', position: 'absolute', left: `${x}px`, top: '0px', border: '1px solid black' }}>
                <div className="stars">
                    {fullStars.map(star => <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>)}
                    {halfStars.map(star => <FontAwesomeIcon icon={faStarHalf} style={{color: 'orange'}} />)}
                </div>
                <h1>{review.title}</h1>
                <p style={{width: '100%'}}>{review.content}</p>
                <div class="small-details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div class="author-source">
                        <p>{review.author}</p>
                        <p>{review.author_address}</p>
                        <p>{review.review_source}</p>
                    </div>
                    <div class="readmore">
                        <a href="/">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}