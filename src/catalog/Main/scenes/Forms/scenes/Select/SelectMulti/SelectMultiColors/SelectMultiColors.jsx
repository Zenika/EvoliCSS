import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <div className="field">
        <div className="control">
          <div className="select is-primary">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-info">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-success">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-warning">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-danger">
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

export default SelectMultiColors
