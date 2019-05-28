import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputIcons = () => (
  <div>
    <h3>Icons</h3>
    <Sandbox>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope" />
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check" />
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock" />
          </span>
        </p>
      </div>
    </Sandbox>
  </div>
)

export default InputIcons
