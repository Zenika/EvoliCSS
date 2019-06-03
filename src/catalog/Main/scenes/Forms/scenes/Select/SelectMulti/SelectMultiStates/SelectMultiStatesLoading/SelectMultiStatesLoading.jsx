import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiStatesLoading = () => (
  <div>
    <h4>Loading</h4>
    <Sandbox>
      <div class="control">
        <div class="select is-loading">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default SelectMultiStatesLoading
