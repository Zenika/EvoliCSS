import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStylesOutlined = () => (
  <div>
    <h4>Outlined</h4>
    <Sandbox>
      <button class="button is-outlined">Outlined</button>
      <button class="button is-primary is-outlined">Outlined</button>
      <button class="button is-link is-outlined">Outlined</button>
      <button class="button is-info is-outlined">Outlined</button>
      <button class="button is-success is-outlined">Outlined</button>
      <button class="button is-danger is-outlined">Outlined</button>
    </Sandbox>
    <Sandbox>
      <button className="button is-primary is-inverted">Inverted</button>
      <button className="button is-link is-inverted">Inverted</button>
      <button className="button is-info is-inverted">Inverted</button>
      <button className="button is-success is-inverted">Inverted</button>
      <button className="button is-danger is-inverted">Inverted</button>
    </Sandbox>
    <Sandbox>
      <button className="button is-primary is-inverted is-outlined">Invert Outlined</button>
      <button className="button is-link is-inverted is-outlined">Invert Outlined</button>
      <button className="button is-info is-inverted is-outlined">Invert Outlined</button>
      <button className="button is-success is-inverted is-outlined">Invert Outlined</button>
      <button className="button is-danger is-inverted is-outlined">Invert Outlined</button>
    </Sandbox>
  </div>
)

export default ButtonStylesOutlined
