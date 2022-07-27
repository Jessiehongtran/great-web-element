import React from 'react';
import Menu from '../components/insta-menu';
import Feed from '../components/insta-feed';
import Header from '../components/insta-header';

export default class Instagram extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div style={{ padding: '20px' }}>
                <div>
                    <Header />
                    <div>
                        <Menu />
                        <Feed />
                    </div>
                </div>
            </div>
        )
    }
}