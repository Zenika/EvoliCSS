import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiStatesIcons = () => (
  <div>
    <h4>Icons</h4>
    <Sandbox>
      <div className="field">
        <div className="control has-icons-left">
          <div className="select">
            <select>
              <option selected>Country</option>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas fa-globe" />
          </div>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="control has-icons-left">
        <div className="select is-small">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <span className="icon is-small is-left">
          <i className="fas fa-globe" />
        </span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="control has-icons-left">
        <div className="select">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <span className="icon is-left">
          <i className="fas fa-globe" />
        </span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="control has-icons-left">
        <div className="select is-medium">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <span className="icon is-medium is-left">
          <i className="fas fa-globe" />
        </span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="control has-icons-left">
        <div className="select is-large">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <span className="icon is-large is-left">
          <i className="fas fa-globe" />
        </span>
      </div>
    </Sandbox>
  </div>
)

export default SelectMultiStatesIcons
