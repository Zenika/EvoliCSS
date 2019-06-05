import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const GeneralDisabled = () => (
  <div>
    <h3>Disabled</h3>
    <Sandbox>
      <fieldset disabled>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>
      </fieldset>
    </Sandbox>
  </div>
)

export default GeneralDisabled
