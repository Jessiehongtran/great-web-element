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
            <div style={{ display: 'flex', width: '100%', boxSizing: 'border-box', minHeight: '100vh', height: '100%', justifyContent: 'center', background: '#fff' }}>
                <div className="insta-wrapper" style={{ padding: '20px', width: '200%', maxWidth: '1100px', background: '#F2F2F2' }}>
                    <Header />
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Menu />
                        <Feed />
                    </div>
                </div>
            </div>
        )
    }
}