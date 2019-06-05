import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesLoading = () => (
  <div>
    <h3>Loading</h3>
    <Sandbox>
      <div className="control is-loading">
        <input className="input" type="text" placeholder="Loading input" />
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field">
        <div className="control is-small is-loading">
          <input className="input is-small" type="text" placeholder="Small loading input" />
        </div>
      </div>
      <div className="field">
        <div className="control is-loading">
          <input className="input" type="text" placeholder="Normal loading input" />
        </div>
      </div>
      <div className="field">
        <div className="control is-medium is-loading">
          <input className="input is-medium" type="text" placeholder="Medium loading input" />
        </div>
      </div>
      <div className="field">
        <div className="control is-large is-loading">
          <input className="input is-large" type="text" placeholder="Large loading input" />
        </div>
      </div>
    </Sandbox>
  </div>
)

export default InputStylesLoading
