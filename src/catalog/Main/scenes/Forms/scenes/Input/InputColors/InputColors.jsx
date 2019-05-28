import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Primary input" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-info" type="text" placeholder="Info input" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-success" type="text" placeholder="Success input" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-warning" type="text" placeholder="Warning input" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input is-danger" type="text" placeholder="Danger input" />
        </div>
      </div>
    </Sandbox>
  </div>
)

export default InputColors
