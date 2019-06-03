import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiStatesHover = () => (
  <div>
    <h4>Hover</h4>
    <Sandbox>
      <div className="control">
        <div className="select">
          <select className="is-hovered">
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default SelectMultiStatesHover
