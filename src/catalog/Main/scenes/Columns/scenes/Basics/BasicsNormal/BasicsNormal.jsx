import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const BasicsNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <div className="columns">
        <div className="column">First column</div>
        <div className="column">Second column</div>
        <div className="column">Third column</div>
        <div className="column">Fourth column</div>
      </div>
    </Sandbox>
  </div>
)
export default BasicsNormal
