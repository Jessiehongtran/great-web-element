import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '../styles/color-picker.css';

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
            },
            copySuccess: ''
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

    componentToHex (c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    rgbToHex (r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' })
        setTimeout(function(){
            this.setState({ copySuccess: '' })
        }.bind(this), 1000)
    }

    render () {

        const { r, g, b, color_options, selected_color } = this.state;
        const colors = [];

        for (let j = 0; j < 30; j++) {
            let row = []
            for (let i = 0; i < 30; i++) {
                let r, g, b;

                if (selected_color.r - i*8 + j*8 > 0) {
                    r = selected_color.r - i*8 + j*8 
                } else {
                    r = 0
                }

                if (selected_color.g - i*8 + j*8 > 0) {
                    g = selected_color.g - i*8 + j*8 
                } else {
                    g = 0
                }

                if (selected_color.b - i*8 + j*8 > 0) {
                    b = selected_color.b - i*8 + j*8 
                } else {
                    b = 0
                }

                row.push({ r: r, g: g, b: b })
            }
            colors.push(row)
        }

        const hex_value = this.rgbToHex(r,g,b);

        return (
            <div className="picker-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
                <div className="picker-wrapper" >
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                        <div className="rgb" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px', minWidth: '300px' }}>
                            <div>R: <span>{r}</span></div>
                            <div>G: <span>{g >=0 ? g : 0}</span></div>
                            <div>B: <span>{b >=0 ? b : 0}</span></div>
                        </div>
                        <div className="hex" style={{ display: 'flex' }}>
                            <div>
                                <span>HEX: </span>
                                <input 
                                    ref={(text) => this.textArea=text} 
                                    value={hex_value}
                                />
                            </div>
                            <div style={{ position: 'relative'}}>
                                <FontAwesomeIcon 
                                    icon={faCopy} 
                                    onClick={(e) => this.copyToClipboard(e)} 
                                    style={{ margin: '0 10px', cursor: 'pointer' }}
                                />
                                <span style={{ position: 'absolute', top: '-15px', left: '25px', fontSize: '12px' }}>{this.state.copySuccess}</span>
                            </div>
                        </div>
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
                        <div className="colors-display" style={{ position: 'relative' }}>
                        {colors.map((colorRow,r) => 
                            <div >
                            {colorRow.map((color,c) => 
                                <div 
                                    className="color-square"
                                    style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,left: `${20*c}px`, top: `${20*r}px` }}
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