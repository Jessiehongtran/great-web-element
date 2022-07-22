import React from 'react';
import EstatePopularEachItem from './estate-popular-each-house';
import { Link } from 'react-router-dom';
import { houses } from '../data/houses';

export default class EstatePopularItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shown_items: houses.slice(0,3),
            shown_text: "See More"
        }
        this.toggleHouses = this.toggleHouses.bind(this);
    }

    toggleHouses () {
        if (this.state.shown_items.length === 3) {
            this.setState({ 
                shown_items: houses,
                shown_text: "See Less"
            })
        } else {
            this.setState({ 
                shown_items: houses.slice(0,3),
                shown_text: "See More"
            })
        }
    }

    render() {

        const { shown_items, shown_text } = this.state;

        return (
            <div style={{ padding: '40px 0'}}>
                <div class="top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px'}}>
                    <div class="title-count" style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 class="title" style={{ marginRight: '15px', color: '#393838' }}>Popular of the Week</h2>
                        <span style={{ marginBottom: '-5px', fontSize: '14px', color: '#393838', fontWeight: '500' }}>{houses.length} items</span>
                    </div>
                    <div class="more" style={{ color: '#097FDE', cursor: 'pointer' }} onClick={() => this.toggleHouses()}>
                        {shown_text}
                    </div>
                </div>
                <div class="items" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {shown_items.map(item => <EstatePopularEachItem item={item} />)}
                </div>
            </div>
        )
    }
}