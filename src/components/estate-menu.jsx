import React from 'react';
import EstateEachNav from './estate-each-nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign, faChartLine, faEye, faComment, faAddressCard, faWallet, faChartArea, faCog, faQuestion } from '@fortawesome/free-solid-svg-icons'

const navs = [
    {
        icon: faChartLine ,
        navText: "Dashboard",
        navLink: ""
    },
    {
        icon: faEye,
        navText: "Discover",
        navLink: ""
    },
    {
        icon: faComment,
        navText: "Messages",
        navLink: ""
    },
    {
        icon: faAddressCard,
        navText: "Profile",
        navLink: ""
    },
    {
        icon: faWallet,
        navText: "My Wallet",
        navLink: ""
    },
    {
        icon: faChartArea,
        navText: "Analytics",
        navLink: ""
    },
    {
        icon: faCog,
        navText: "Settings",
        navLink: ""
    },
    {
        icon: faQuestion,
        navText: "Help & Center",
        navLink: ""
    }
]

export default class EstateMenu extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div style={{ width: '200px', padding: '20px', boxSizing: 'border-box' }}>
                <div style={{ marginBottom: '40px', padding: '10px 0 0 0' }}>
                    <FontAwesomeIcon icon={faSign} style={{ fontSize: '20px', color: '#2265FE', marginRight: '10px' }} />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>The Estate</span>
                </div>
                {navs.map(nav => <EstateEachNav nav={nav} />)}  
            </div>
        )
    }
}