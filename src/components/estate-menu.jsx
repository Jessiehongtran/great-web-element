import React from 'react';
import EstateEachNav from './estate-each-nav';

const navs = [
    {
        iconUrl: "",
        iconAlt: "",
        navText: "Dashboard",
        navLink: ""
    },
    {
        iconUrl: "",
        iconAlt: "",
        navText: "Discover",
        navLink: ""
    },
    {
        iconUrl: "",
        iconAlt: "",
        navText: "Messages",
        navLink: ""
    },
    {
        iconUrl: "",
        iconAlt: "",
        navText: "Profile",
        navLink: ""
    },
    {
        iconUrl: "",
        iconAlt: "",
        navText: "My Wallet",
        navLink: ""
    },
    {
        iconUrl: "",
        iconAlt: "",
        navText: "Analytics",
        navLink: ""
    },
    {
        iconUrl: "",
        iconAlt: "",
        navText: "Settings",
        navLink: ""
    },
    {
        iconUrl: "",
        iconAlt: "",
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
            <div>
                <div>Logo</div>
                {navs.map(nav => <EstateEachNav nav={nav} />)}  
            </div>
        )
    }
}