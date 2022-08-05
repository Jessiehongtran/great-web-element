import React, { useState } from 'react';
import '../styles/dark-mode.css';

export default function DarkMode () {

    const [dark, setDark] = useState(false);

    const toggleMode = () => {
        setDark(!dark)
    }

    return (
        <div className={ dark ? "mode-container dark" : "mode-container bright"}>
            <div className="mode-wrapper">
                <div className="mode-top">
                    <h3>Today is the best day</h3>
                    <div className="mode-switch" onChange={() => toggleMode()}>
                        <input type="checkbox" className="mode-input"/>
                        <div className="toggle">
                            { dark 
                            ? <img src="https://www.freeiconspng.com/uploads/moon-icon-32.png" style={{ width: '30px' }} alt="moon"/>
                            : <img src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png" style={{ width: '25px' }} alt="sun"/> }
                        </div>
                    </div>                    
                </div>
                <div className="mode-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    )
}