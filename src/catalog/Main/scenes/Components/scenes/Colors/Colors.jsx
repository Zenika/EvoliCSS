import React from 'react'
import Sandbox from 'catalog/components/Sandbox'

import './colors.scss'

const Colors = () => (
    <div className='pageContainer'>
        <h2>Colors</h2>
        <Sandbox css={`.container {
            display: flex;
            justify-content: space-between;
            flex-flow: row wrap;
        }
        .container .shape {
            margin: 1em;
            margin-left: 4em;
            margin-right: 4em;
            display: flex;
            align-items: center;
            justify-content: center;
        }`}>
            <div className="container">
                <div className="shape circle background-red"><p>#B51432</p></div>
                <div className="shape circle background-grey-light"><p>#B51432</p></div>
                <div className="shape circle background-grey-medium"><p>#B51432</p></div>
                <div className="shape circle background-grey-dark"><p>#B51432</p></div>
                <div className="shape circle background-black-light"><p>#B51432</p></div>
                <div className="shape square background-red"><p>#B51432</p></div>
                <div className="shape square background-grey-light"><p>#B51432</p></div>
                <div className="shape square background-grey-medium"><p>#B51432</p></div>
                <div className="shape square background-grey-dark"><p>#B51432</p></div>
                <div className="shape square background-black-light"><p>#B51432</p></div>
            </div>
        </Sandbox>
    </div>
)

export default Colors
