import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesLoading = () => (
  <div>
    <h3>Loading</h3>
    <Sandbox>
      <div class="control is-loading">
        <input class="input" type="text" placeholder="Loading input" />
      </div>
    </Sandbox>
    <Sandbox>
      <div class="field">
        <div class="control is-small is-loading">
          <input class="input is-small" type="text" placeholder="Small loading input" />
        </div>
      </div>
      <div class="field">
        <div class="control is-loading">
          <input class="input" type="text" placeholder="Normal loading input" />
        </div>
      </div>
      <div class="field">
        <div class="control is-medium is-loading">
          <input class="input is-medium" type="text" placeholder="Medium loading input" />
        </div>
      </div>
      <div class="field">
        <div class="control is-large is-loading">
          <input class="input is-large" type="text" placeholder="Large loading input" />
        </div>
      </div>
    </Sandbox>
  </div>
)

export default InputStylesLoading
