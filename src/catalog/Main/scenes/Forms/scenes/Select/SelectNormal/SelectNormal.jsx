import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectNormal = () => (
  <div>
    <h2>Normal</h2>
    <Sandbox>
      <div className="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </Sandbox>
  </div>
)

export default SelectNormal
