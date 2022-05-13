import React from 'react';

export default class Review extends React.Component {
    constructor(props){
        super(props);

    }

    render(){

        const { review } = this.props;

        return (
            <div style={{background: '#fff', margin: '10px', padding: '30px', minWidth: '500px', borderRadius: '12px' }}>
                <div>Stars</div>
                <h1>{review.title}</h1>
                <p>{review.content}</p>
                <div class="small-details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
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