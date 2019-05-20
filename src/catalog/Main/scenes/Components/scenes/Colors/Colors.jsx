import React from 'react'
import Sandbox from 'catalog/components/Sandbox'

import './colors.scss'

const Colors = () => (
  <div className="pageContainer">
    <h2>Colors</h2>
    <Sandbox
      css={`
        .container {
          display: flex;
          justify-content: space-between;
          flex-flow: row wrap;
        }
        .container > * {
          margin: 1em;
          margin-left: 4em;
          margin-right: 4em;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 10em;
          width: 10em;
        }
        .container > *:nth-child(-n + 5) {
          border-radius: 50%;
        }
      `}
    >
      <div className="container">
        <div className="background-red">
          <p>#B51432</p>
        </div>
        <div className="background-grey-light">
          <p>#F2F2F2</p>
        </div>
        <div className="background-grey-medium">
          <p>#D2D6D8</p>
        </div>
        <div className="background-grey-dark">
          <p>#B5B5B5</p>
        </div>
        <div className="background-black-light">
          <p>#4C4C4C</p>
        </div>
        <div className="background-red">
          <p>#B51432</p>
        </div>
        <div className="background-grey-light">
          <p>#F2F2F2</p>
        </div>
        <div className="background-grey-medium">
          <p>#D2D6D8</p>
        </div>
        <div className="background-grey-dark">
          <p>#B5B5B5</p>
        </div>
        <div className="background-black-light">
          <p>#4C4C4C</p>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default Colors
