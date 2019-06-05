import React from 'react'
import Figma from 'catalog/components/Figma'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const Checkbox = () => (
  <div>
    <h2>Checkbox</h2>
    <Figma nodeId="4%253A202" />
    <Sandbox>
      <label className="checkbox">
        <input type="checkbox" />
        Remember me
      </label>
    </Sandbox>
    <Sandbox>
      <label className="checkbox">
        <input type="checkbox" />I agree to the{' '}
        <a href="https://github.com/Zenika/EvoliCSS">terms and conditions</a>
      </label>
    </Sandbox>
    <Sandbox>
      <label className="checkbox" disabled>
        <input type="checkbox" disabled />
        Save my preferences
      </label>
    </Sandbox>
  </div>
)

export default Checkbox
