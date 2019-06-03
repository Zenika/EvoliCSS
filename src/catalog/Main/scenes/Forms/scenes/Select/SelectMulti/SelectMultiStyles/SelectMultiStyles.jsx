import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiStyles = () => (
  <div>
    <h3>Styles</h3>
    <Sandbox>
      <div class="select is-rounded">
        <select>
          <option>Rounded dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </Sandbox>
  </div>
)

export default SelectMultiStyles
