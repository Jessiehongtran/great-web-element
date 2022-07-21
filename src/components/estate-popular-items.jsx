import React from 'react';
import EstatePopularEachItem from './estate-popular-each-item';
import { Link } from 'react-router-dom';

const items = [
    {
        image_url: "https://ap.rdcpix.com/c95aa6fafa59d2825bfde08e8f1e9c3dl-m3542850267od-w480_h360_x2.jpg",
        price: 53345.00,
        name: "Pualing Benar House",
        address: "5880 Silver Leaf Rd, San Jose, CA, 95138"
    },
    {
        image_url: "https://www.compass.com/ucfe-assets/homepage/homepage-v1.31.1/assets/hero_high_res.jpeg",
        price: 61234.10,
        name: "Senantiasa House",
        address: "5885 Silver Leaf Rd, San Jose, CA, 95138"
    },
    {
        image_url: "https://www.thespruce.com/thmb/sws7SOiBFOw95JIlgrLcCGrSu68=/1821x1366/smart/filters:no_upscale()/craftsman-homes-5070211-hero-e13889c50bec48a386a8b51b25f748c1.jpg",
        price: 68241.30,
        name: "Nurjo Mabar House",
        address: "5883 Silver Leaf Rd, San Jose, CA, 95138"
    }
]

export default class EstatePopularItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ padding: '40px 0'}}>
                <div class="top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px'}}>
                    <div class="title-count" style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 class="title" style={{ marginRight: '15px', color: '#393838' }}>Popular of the Week</h2>
                        <span style={{ marginBottom: '-5px', fontSize: '14px', color: '#393838', fontWeight: '500' }}>10 items</span>
                    </div>
                    <div class="more" style={{ color: '#097FDE' }}>
                        <Link to="" style={{ textDecoration: 'none', color: 'inherit'}}>See More</Link>
                    </div>
                </div>
                <div class="items" style={{ display: 'flex' }}>
                    {items.map(item => <EstatePopularEachItem item={item} />)}
                </div>
            </div>
        )
    }
}