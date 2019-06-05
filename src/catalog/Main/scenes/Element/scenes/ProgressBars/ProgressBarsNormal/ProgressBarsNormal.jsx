import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ProgressBarsNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <progress className="progress" value="15" max="100">
        15%
      </progress>
    </Sandbox>
  </div>
)

export default ProgressBarsNormal
