import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiSizes = () => (
  <div>
    <hs>Sizes</hs>
    <Sandbox>
      <div class="field">
        <div class="control">
          <div class="select is-small">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-medium">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-large">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default SelectMultiSizes
