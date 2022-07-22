import React from 'react';
import EstateMenu from '../components/estate-menu';
import EstateContent from '../components/estate-content';
import EstateUtility from '../components/estate-utility';

export default class Estate extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <EstateMenu />
                <EstateContent />
                <EstateUtility />
            </div>
        )
    }
}