import React from 'react';
import '../styles/hover.css';

export default class Hover extends React.Component {
    constructor () {
        super ();
        this.state = {
            show: false,
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver () {
        
        this.setState({ show: !this.state.show })

        console.log('show')
    }

    render () {

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000', color: '#fff', minHeight: '100vh', padding: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p className="quote">Pride is concerned with who is right. Humility is concerned with what is right. </p>
                    <p className="author">Ezra Taft Benson</p>
                </div>
            </div>
        )
    }
}