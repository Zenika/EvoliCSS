import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiStatesNormal = () => (
  <div>
    <h4>Normal</h4>
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
  </div>
)

export default SelectMultiStatesNormal
