import React from 'react';
import '../styles/slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const photos = [
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1625113213/IMG_1264_f4ewlq.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1621871745/IMG_1109_lpqicv.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1621959339/IMG_1129_vomcle.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1625113336/IMG_1208_u57qsm.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1625113339/IMG_1209_kxzctw.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108355/image_67145217_n50hxv.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108358/image_50390785_xwxkgr.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108362/image_50380289_nmzfpd.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108368/image_50405633_ja5ehq.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108382/image_67129089_cbv2jb.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108391/image_50395393_tawexx.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108411/image_67172609_duuaxb.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108471/image_67168001_cnzcq6.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108498/image_50407425_d09kxs.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108502/image_67174145_tzzkov.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108530/image_67116033_ovublp.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108543/image_50392065_fscwyi.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108547/image_50403585_xufgab.jpg",
    "https://res.cloudinary.com/dfulxq7so/image/upload/v1640108559/image_67183617_ioksmg.jpg",

]

export default class Slider extends React.Component {

    constructor (props) {
        super (props) 
        this.state = {
            photo_ind: 0,
            opacity: 1,
            fadein: true
        }

        this.next = this.next.bind(this);
        this.back = this.back.bind(this);
        this.increaseOpacity = this.increaseOpacity.bind(this);
    }

    increaseOpacity (curOpacity) {
        if (curOpacity < 0.9) {
            curOpacity += 0.1
            this.setState({ opacity: curOpacity });

            setTimeout(function() {
                this.increaseOpacity(curOpacity)
            }.bind(this), 50)
        } 
        
    }

    next () {

        const { photo_ind} = this.state;

        if (photo_ind < photos.length - 1) {
            this.setState({ photo_ind: photo_ind + 1 })
        } else {
            this.setState({ photo_ind: 0 })
        }

        let opacity = 0
        //how to set opacity back to 0
        this.increaseOpacity(opacity)
    }

    back () {

        const { photo_ind } = this.state;
        
        if (photo_ind >  1) {
            this.setState({ photo_ind: photo_ind - 1 })
        } else {
            this.setState({ photo_ind: photos.length - 1 })
        }

        let opacity = 0
        //how to set opacity back to 0
        this.increaseOpacity(opacity)
    }
    
    render () {

        const { photo_ind, opacity } = this.state;

        return (
            <div className="slider-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="slider-wrapper" style={{ display: 'flex', alignItems: 'center'}}>
                    <div onClick={() => this.back()} className="left slider-btn" style={{ cursor: 'pointer', width: '30px', height: '30px', background: 'grey', color: '#fff',  borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faAngleLeft} style={{ fontSize: '20px' }} />
                    </div>
                    <img src={photos[photo_ind]} alt={`Photo ${photo_ind}`} style={{width: '300px', margin: '0 40px', opacity: `${opacity}` }} />
                    <div onClick={() => this.next()} className="right slider-btn" style={{ cursor: 'pointer', width: '30px', height: '30px', background: 'grey', color: '#fff',borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: '20px' }} />
                        <input type="checkbox" className="slider-check" style={{display: 'none'}} />
                    </div>
                </div>
            </div>
        )
    }
}