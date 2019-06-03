import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ProgressBarsSizes = () => (
  <div>
    <h3>Sizes</h3>
    <Sandbox>
      <progress className="progress is-small" value="15" max="100">
        15%
      </progress>
      <progress className="progress" value="30" max="100">
        30%
      </progress>
      <progress className="progress is-medium" value="45" max="100">
        45%
      </progress>
      <progress className="progress is-large" value="60" max="100">
        60%
      </progress>
    </Sandbox>
  </div>
)

export default ProgressBarsSizes
