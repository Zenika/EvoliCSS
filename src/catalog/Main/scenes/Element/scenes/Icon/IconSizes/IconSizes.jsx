import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const Icon = () => (
  <div>
    <h3>Sizes</h3>
    <Sandbox>
      <span className="icon is-medium">
        <span className="fa-stack">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fas fa-flag fa-stack-1x fa-inverse" />
        </span>
      </span>
    </Sandbox>
  </div>
)

export default Icon
