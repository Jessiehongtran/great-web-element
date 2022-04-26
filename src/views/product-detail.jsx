import React from 'react';
import '../styles/product-detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <div className="flex brown">
                            <p className="flex-item">Shop</p>
                            <p className="flex-item">Collections</p>
                            <p className="flex-item">Our Story</p>
                        </div>
                        <div className="product-name">
                            <p>MANDRAGORA</p>
                        </div>
                        <div className="flex">
                            <div className="flex flex-item">
                                <p className="brown">Ukraine</p>
                                <FontAwesomeIcon className="icon" icon={["fa", "fa-angle-down"]} />
                            </div>
                            <div className="flex flex-item">
                                <p className="brown">Cart</p>
                                <div className="icon cart-icon">2</div>
                            </div>
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="image">
                            <img className="shampoo" src="https://pngimg.com/uploads/shampoo/shampoo_PNG12.png" alt="product-image" />
                        </div>
                        <div className="detail">
                            <p className="product-category">FACIAL CLEANSER</p>
                            <div className="flex minus-top">
                                <p className="text-title brown">Collections: </p>
                                <p className="collection item">Organic Skin</p>
                            </div>
                            <p className="brown product-intro">For the brand visual style, we've researched some 15-16th century botanical books to create a series of illustrations that capture spirit of medieval era in a contemporary style.</p>
                            <div className="volume-options">
                                <button className="volume-option active pointer">40 ml</button>
                                <button className="volume-option pointer">80 ml</button>
                                <button className="volume-option pointer">120 ml</button>
                            </div>
                            <div class="flex top-bottom-gap">
                                <p className="text-title brown">Organic Skin Organic</p>
                                <div class="flex buy-action">
                                    <button class="math-btn pointer">-</button>
                                    <span className="buy-count">1</span>
                                    <button class="math-btn pointer">+</button>
                                </div>
                            </div>
                            <div className="flex summary space-between">
                                <span>ADD TO BAG</span>
                                <span className="total-cost">$48 USD</span>
                            </div>
                            <p className="note">***Apply a small amount to damp skin. Massage in circular motions before rinsing with water.</p>
                            <div className="stamp">
                                <img className="stamp-img" src="http://bsrservices.com/wp-content/uploads/2021/04/Eco-Friendly-BSR-1.png" alt="stamp"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}