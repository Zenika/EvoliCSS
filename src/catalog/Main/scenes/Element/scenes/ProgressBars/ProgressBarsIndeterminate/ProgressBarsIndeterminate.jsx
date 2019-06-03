import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ProgressBarsIndeterminate = () => (
  <div>
    <h3>Indeterminate</h3>
    <Sandbox>
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
      <progress className="progress is-danger" max="100">
        30%
      </progress>
      <progress className="progress is-medium is-dark" max="100">
        45%
      </progress>
      <progress className="progress is-large is-info" max="100">
        60%
      </progress>
    </Sandbox>
  </div>
)

export default ProgressBarsIndeterminate
