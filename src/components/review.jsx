import React from 'react';

export default class Review extends React.Component {
    constructor(props){
        super(props);

    }

    render(){

        const { review } = this.props;

        return (
            <div>
                <div>Stars</div>
                <h1>{review.title}</h1>
                <p>{review.content}</p>
                <div class="small-details" style={{ display: 'flex',}}>
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