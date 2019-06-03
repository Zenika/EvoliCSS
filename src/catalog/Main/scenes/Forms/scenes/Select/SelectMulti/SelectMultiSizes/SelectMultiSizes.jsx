import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiSizes = () => (
  <div>
    <hs>Sizes</hs>
    <Sandbox>
      <div className="field">
        <div className="control">
          <div className="select is-small">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-medium">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-large">
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
