import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputSizes = () => (
  <div>
    <h3>Sizes</h3>
    <Sandbox>
      <div className="field">
        <div className="control">
          <input className="input is-small" type="text" placeholder="Small input" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Normal input" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input is-medium" type="text" placeholder="Medium input" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input is-large" type="text" placeholder="Large input" />
        </div>
      </div>
    </Sandbox>
  </div>
)

export default InputSizes
