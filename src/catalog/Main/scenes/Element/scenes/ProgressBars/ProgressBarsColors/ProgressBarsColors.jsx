import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ProgressBarsColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <progress className="progress is-primary" value="15" max="100">
        15%
      </progress>
      <progress className="progress is-link" value="30" max="100">
        30%
      </progress>
      <progress className="progress is-info" value="45" max="100">
        45%
      </progress>
      <progress className="progress is-success" value="60" max="100">
        60%
      </progress>
      <progress className="progress is-warning" value="75" max="100">
        75%
      </progress>
      <progress className="progress is-danger" value="90" max="100">
        90%
      </progress>
    </Sandbox>
  </div>
)

export default ProgressBarsColors
