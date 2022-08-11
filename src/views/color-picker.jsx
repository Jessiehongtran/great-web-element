import React from 'react';

export default class ColorPicker extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            r: 0, 
            g: 0,
            b: 0,
            color_options: [
                { r: 255, g: 0, b: 0},
                { r: 0, g: 255, b: 0},
                { r: 0, g: 0, b: 255},
                { r: 255, g: 255, b: 0},
            ],
            selected_color: {
                r: 255,
                g: 0,
                b: 0
            }
        }
    }

    setUpColorOptions () {
        const options = this.state.color_options;
        for (let i = 0; i < 10; i++) {
            const randomR = Math.floor(Math.random()*255)
            const randomG = Math.floor(Math.random()*255)
            const randomB = Math.floor(Math.random()*255)
            options.push({ r: randomR, g: randomG, b: randomB })
        }
        this.setState({ color_options: options })
    }

    componentDidMount () {
        this.setUpColorOptions()
    }

    updateRGB(color) {
        this.setState({
            r: color.r,
            g: color.g,
            b: color.b
        })
    }

    updateSelectedColor(color) {
        this.setState({ selected_color: color })
    }

    render () {

        const { r, g, b, color_options, selected_color } = this.state;
        const colors = [];

        for (let j = 0; j < 30; j++) {
            let row = []
            for (let i = 0; i < 30; i++) {
                row.push({
                    r: selected_color.r - i*8 + j*8,
                    g: selected_color.g - i*8 + j*8,
                    b: selected_color.b - i*8 + j*8
                })
            }
            colors.push(row)
        }

        return (
            <div className="picker-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
                <div className="picker-wrapper" >
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                        <div>R: <span>{r}</span></div>
                        <div>G: <span>{g >=0 ? g : 0}</span></div>
                        <div>B: <span>{b >=0 ? b : 0}</span></div>
                    </div>
                    <div className="colors" style={{ display: 'flex' }}>
                        <div className="colors-options" style={{ marginRight: '20px' }}>
                            {color_options.map(color => 
                                <div 
                                    style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`, width: '20px', height: '20px', cursor: 'pointer' }}
                                    onClick={() => this.updateSelectedColor(color)}
                                >
                                </div>
                            )}
                        </div>
                        <div className="colors-display">
                        {colors.map(colorRow => 
                            <div style={{ display: 'flex' }}>
                            {colorRow.map(color => 
                                <div 
                                    style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`, width: '20px', height: '20px'}}
                                    onClick={() => this.updateRGB(color)}
                                >
                                </div>
                            )}
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}