import React from 'react';
import '../styles/product-detail.css'

export default class ProductDetail extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div className="detail-container">
                <div className="detail-wrapper">
                    <div className="detail-nav">
                        <div className="flex">
                            <p>Shop</p>
                            <p>Collections</p>
                            <p>Our Story</p>
                        </div>
                        <div>
                            <p>MANDRAGORA</p>
                        </div>
                        <div className="flex">
                            <div>
                                <p>Ukraine</p>
                                <div>Icon</div>
                            </div>
                            <div>
                                <p>Cart</p>
                                <div>Icon</div>
                            </div>
                        </div>
                    </div>
                    <div className="product-info">
                        <div class="product-image">
                            <img src="" alt="product-image" />
                        </div>
                        <div class="detail">
                            <p>FACIAL CLEANSER</p>
                            <div>
                                <p>Collections</p>
                                <p>Organic Skin</p>
                            </div>
                            <p>For the brand visual style, we've researched some 15-16th century botanical books to create a series of illustrations that capture spirit of medieval era in a contemporary style.</p>
                            <div class="volume-options">
                                <button>40 ml</button>
                                <button>80 ml</button>
                                <button>120 ml</button>
                            </div>
                            <div class="">
                                <p>Organic Skin Organic</p>
                                <div>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <div>
                                <p>ADD TO BAG</p>
                                <p>$48 USD</p>
                            </div>
                            <p>***Apply a small amount to damp skin. Massage in circular motions before rinsing with water.</p>
                            <div>
                                <img src="" alt="stamp"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}