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
        }`}>
            <div className="container">
                <div className="shape circle background-red"></div>
                <div className="shape circle background-grey-light"></div>
                <div className="shape circle background-grey-medium"></div>
                <div className="shape circle background-grey-dark"></div>
                <div className="shape circle background-black-light"></div>
                <div className="shape square background-red"></div>
                <div className="shape square background-grey-light"></div>
                <div className="shape square background-grey-medium"></div>
                <div className="shape square background-grey-dark"></div>
                <div className="shape square background-black-light"></div>
            </div>
        </Sandbox>
    </div>
)

export default Colors
