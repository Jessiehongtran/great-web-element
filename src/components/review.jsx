import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            turn: false,
            x: 0
        }

    }

    render(){

        const { review } = this.props;
        let cardWidth = 500;
        // setTimeout(function(){
        //     if (this.state.x < -cardWidth){
        //         this.setState({turn: true})
        //     } else {
        //         this.setState({turn: false})
        //     }

        //     if (this.state.turn){
        //         this.setState({x: 1000})
        //     } else {
        //         this.setState({x: this.state.x - 10})
        //     }
        // }.bind(this), 500)

        // setTimeout(function(){
        //     this.setState({x: this.state.x - 10})
        //     console.log(this.state.x)
        // }.bind(this), 500)
        const fullStarNum = Math.floor(review.rating)
        const fullStars = Array.apply(0, Array(fullStarNum));
        const halfStars = Array.apply(0, Array(5 - fullStarNum))

        console.log(fullStars)
       
        return (
            <div style={{ margin: '10px', padding: '30px', width: `${cardWidth}px`, borderRadius: '12px', position: 'absolute', left: `${(review.id-1)*cardWidth*1.2+40+ this.state.x}px`, top: '0px', border: '1px solid black' }}>
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
                        <a href="">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}