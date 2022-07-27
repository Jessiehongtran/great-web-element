import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPaperPlane, faPlusSquare, faVideo, faHeart } from '@fortawesome/free-solid-svg-icons';


const icons = [
    {
        name: faHome,
        link: ""
    },
    {
        name: faPaperPlane,
        link: ""
    },
    {
        name: faPlusSquare,
        link: ""
    },
    {
        name: faVideo,
        link: ""
    },
    {
        name: faHeart,
        link: ""
    }
]

export default class InstaHeader  extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px 0' }}>
                <img style={{ width: '100px' }} alt="Instagram Logo" src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"/>
                <div className="icons" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="social-media">
                        {icons.map(icon => <FontAwesomeIcon icon={icon.name} style={{ margin: '0 8px', fontSize: '20px' }} />)}
                    </div>
                    <div className="account">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="account placeholder" style={{ borderRadius: '50%', width: '25px', height: '25px', margin: '0 8px' }} />
                    </div>
                </div>
            </div>
        )
    }
}