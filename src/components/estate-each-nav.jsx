import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default class EstateEachNav extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {

        const { icon, navText, navLink } = this.props.nav;

        return (
            <div style={{ display: 'flex', color: '#5B5B5B', margin: '25px 0' }}>
                <FontAwesomeIcon icon={icon} style={{ marginRight: '10px', width: '20px' }}/>
                <div >
                    <Link to={navLink} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {navText}
                    </Link>
                </div>
            </div>
        )
    }
}