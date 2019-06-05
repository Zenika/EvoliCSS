import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiStatesFocus = () => (
  <div>
    <h4>Focus</h4>
    <Sandbox>
      <div className="control">
        <div className="select">
          <select className="is-focused">
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default SelectMultiStatesFocus
