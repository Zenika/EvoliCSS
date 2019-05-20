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
          <p>#B51432</p>
        </div>
        <div className="background-grey-medium">
          <p>#B51432</p>
        </div>
        <div className="background-grey-dark">
          <p>#B51432</p>
        </div>
        <div className="background-black-light">
          <p>#B51432</p>
        </div>
        <div className="background-red">
          <p>#B51432</p>
        </div>
        <div className="background-grey-light">
          <p>#B51432</p>
        </div>
        <div className="background-grey-medium">
          <p>#B51432</p>
        </div>
        <div className="background-grey-dark">
          <p>#B51432</p>
        </div>
        <div className="background-black-light">
          <p>#B51432</p>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default Colors
