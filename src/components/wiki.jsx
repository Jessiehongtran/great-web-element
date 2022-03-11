import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';

export default class Wiki extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ border: '1px solid #DDDDDD', borderRadius: '8px' }}>
                    <div style={{ borderBottom: '1px solid #DDDDDD', padding: '15px', fontWeight: 500, fontSize: '18px' }}>See results about</div>
                    <div style={{ display: 'flex',padding: '0px 15px', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '18px', color: 'grey' }}/>
                        <div style={{ margin: '0 40px '}}>
                            <p style={{ marginBottom: '5px', fontWeight: 400 }}>wiki</p>
                            <p style={{ marginTop: 0, color: 'grey'}}>Dictionary definition</p>
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: '18px', color: 'grey', marginLeft: '40px' }} />
                    </div>
                </div>
            </div>
        )
    }
}