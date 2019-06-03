import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <div class="select is-multiple">
        <select multiple size="8">
          <option value="Argentina">Argentina</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Brazil">Brazil</option>
          <option value="Chile">Chile</option>
          <option value="Colombia">Colombia</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Guyana">Guyana</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Suriname">Suriname</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Venezuela">Venezuela</option>
        </select>
      </div>
    </Sandbox>
  </div>
)

export default SelectMultiNormal
