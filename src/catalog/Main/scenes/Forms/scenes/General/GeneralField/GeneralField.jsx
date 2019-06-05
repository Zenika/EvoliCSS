import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const GeneralField = () => (
  <div>
    <h3>Field</h3>
    <Sandbox>
      <div className="field">
        <label className="label">Label</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
        <p className="help">This is a help text</p>
      </div>
    </Sandbox>
    <Sandbox>
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
    </Sandbox>
  </div>
)

export default GeneralField
