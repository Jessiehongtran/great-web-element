import React from 'react';
import Wiki from '../components/wiki';
import Products from './products';
import Profiles from './profile-shift';
import ProductDetail from './product-detail';
import ResponsivePage from './responsive-page';

export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ padding: '20px' }}>
                <Wiki />
                <Products />
                <Profiles />
                <ProductDetail />
                <ResponsivePage />
            </div>
        )
    }
}