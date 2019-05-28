import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesHover = () => (
  <div>
    <h3>Hover</h3>
    <Sandbox>
      <div class="control">
        <input class="input is-hovered" type="text" placeholder="Hovered input" />
      </div>
    </Sandbox>
  </div>
)

export default InputStylesHover
