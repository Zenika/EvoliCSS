import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SelectMultiStatesIcons = () => (
  <div>
    <h4>Icons</h4>
    <Sandbox>
      <div class="field">
        <div class="control has-icons-left">
          <div class="select">
            <select>
              <option selected>Country</option>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
          <div class="icon is-small is-left">
            <i class="fas fa-globe" />
          </div>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="control has-icons-left">
        <div class="select is-small">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <span class="icon is-small is-left">
          <i class="fas fa-globe" />
        </span>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="control has-icons-left">
        <div class="select">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <span class="icon is-left">
          <i class="fas fa-globe" />
        </span>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="control has-icons-left">
        <div class="select is-medium">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <span class="icon is-medium is-left">
          <i class="fas fa-globe" />
        </span>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="control has-icons-left">
        <div class="select is-large">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <span class="icon is-large is-left">
          <i class="fas fa-globe" />
        </span>
      </div>
    </Sandbox>
  </div>
)

export default SelectMultiStatesIcons
