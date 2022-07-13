import React from 'react';
import { Link } from 'react-router-dom';

export default class EstateEachNav extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {

        const { iconUrl, iconAlt, navText, navLink } = this.props.nav;

        return (
            <div style={{ display: 'flex' }}>
                <img src={iconUrl} alt={iconAlt} />
                <div>
                    <Link to={navLink}>
                        {navText}
                    </Link>
                </div>
            </div>
        )
    }
}