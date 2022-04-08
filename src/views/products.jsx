import React from 'react';
import Product from '../components/product';

export default class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [
                {
                    price: 35,
                    name: "Paraffin Outdoor Canvas Backpack "
                }
            ]
        }
    }

    render(){

        const { products } = this.state;

        return (
            <div>
                {products.map(product => <Product product={product}/>)}
            </div>
        )
    }
}