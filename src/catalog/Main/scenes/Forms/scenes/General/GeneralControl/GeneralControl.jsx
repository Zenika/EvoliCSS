import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const GeneralControl = () => (
  <div>
    <h3>Control</h3>
    <Sandbox>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </Sandbox>
    <Sandbox>
      <div className="control">
        <div className="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </Sandbox>
  </div>
)

export default GeneralControl
