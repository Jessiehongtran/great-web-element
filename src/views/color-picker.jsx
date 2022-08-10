import React from 'react';

export default class ColorPicker extends React.Component {
    constructor (props) {
        super (props)
        this.state = {

        }
    }

    render () {

        const colors = [];

        for (let j = 0; j < 30; j++) {
            let row = []
            for (let i = 0; i < 30; i++) {
                row.push({
                    r: 255 - i*8,
                    g: (j-i)*9,
                    b: (j-i)*9
                })
            }
            colors.push(row)
        }

        return (
            <div className="picker-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
                <div className="picker-wrapper" >
                    {colors.map(colorRow => 
                        <div style={{ display: 'flex' }}>
                        {colorRow.map(color => 
                            <div style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`, width: '20px', height: '20px'}}>
                            </div>
                        )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}