import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiStatesFocus = () => (
  <div>
    <h4>Focus</h4>
    <Sandbox>
      <div class="control">
        <div class="select">
          <select class="is-focused">
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default SelectMultiStatesFocus
