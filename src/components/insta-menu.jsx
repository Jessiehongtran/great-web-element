import React from 'react';
import '../styles/insta-menu.css';

const menu_items = [
    {
        text: "Edit Profile",
        link: "",
        highlighted: false
    },
    {
        text: "Account",
        link: "",
        highlighted: false
    },
    {
        text: "Profile Insight",
        link: "",
        highlighted: false
    },
    {
        text: "Change Password",
        link: "",
        highlighted: false
    },
    {
        text: "Notifications",
        link: "",
        highlighted: false
    },
    {
        text: "Privacy and Security",
        link: "",
        highlighted: false
    },
    {
        text: "Login Activity",
        link: "",
        highlighted: false
    },
    {
        text: "Help",
        link: "",
        highlighted: false
    },
    {
        text: "Logout",
        link: "",
        highlighted: true
    }
]

export default class InstaMenu extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div className="insta-menu">
                <div className="insta-menu-wrapper" style={{ display: 'flex', flexDirection: 'column'}}>
                {menu_items.map(item => 
                    <div className="each-nav">
                        {item.highlighted
                        ? <a 
                            href={item.link}
                            style={{ 
                                textDecoration: 'none', 
                                color: 'red'
                            }}
                        >{item.text}</a>
                        :  <a 
                            href={item.link}
                            style={{ 
                                textDecoration: 'none', 
                                color: 'inherit'
                            }}
                            >{item.text}</a>}
                    </div>
                )}
                </div>
            </div>
        )
    }
}