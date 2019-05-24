import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonGeneral = () => (
  <div>
    <h3>General</h3>
    <Sandbox>
      <a className="button">Button</a>
    </Sandbox>
    <Sandbox>
      <a className="button">Anchor</a>
      <button className="button">Button</button>
      <input className="button" type="submit" value="Submit input" />
      <input className="button" type="reset" value="Reset input" />
    </Sandbox>
  </div>
)

export default ButtonGeneral
