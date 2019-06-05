import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesStatic = () => (
  <div>
    <h3>Static</h3>
    <Sandbox>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">From</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input is-static" type="email" value="me@example.com" readonly />
            </p>
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default InputStylesStatic
