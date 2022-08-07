import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ padding: '20px' }}>
                <div>
                    <h3>Interfaces</h3>
                    <ul>
                        <li>
                            <Link to="/estate">
                                Shortcut of a real estate site
                            </Link>
                        </li>
                        <li>
                            <Link to="/instagram">
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link to="/random">
                                Random cards
                            </Link>
                        </li>
                        <li>
                            <Link to="/darkmode">
                                Dark Mode
                            </Link>
                        </li>
                        <li>
                            <Link to="/oil">
                                Ecommerce product detail page
                            </Link>
                        </li>
                        <li>
                            <Link to="/reviews">
                                Sliding reviews
                            </Link>
                        </li>
                        <li>
                            <Link to="/hover">
                                Hover
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}