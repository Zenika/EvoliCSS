import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesStatic = () => (
  <div>
    <h3>Static</h3>
    <Sandbox>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">From</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input class="input is-static" type="email" value="me@example.com" readonly />
            </p>
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default InputStylesStatic
