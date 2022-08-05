import React from 'react';

export default class Product extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return (
            <div className="product-container" style={{ width: '200px'}}>
                <div className="product-image" style={{ width: '100%', display: 'flex', justifyContent: 'center', border: '1px solid silver', borderRadius: '10px'}}>
                    <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1647694227/Rectangle_105_fbxny5.svg" alt="random" />
                </div>
                <div className="title-price" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p className="product-title" style={{ fontWeight: 500 }}>
                        Paraffin Outdoor Canvas Backpack
                    </p>
                    <p className="price">
                        <span>$</span>
                        <span>35</span>
                    </p>
                </div>
            </div>
        )
    }
}