import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStylesOutlined = () => (
  <div>
    <h4>Outlined</h4>
    <Sandbox>
      <a class="button is-outlined">Outlined</a>
      <a class="button is-primary is-outlined">Outlined</a>
      <a class="button is-link is-outlined">Outlined</a>
      <a class="button is-info is-outlined">Outlined</a>
      <a class="button is-success is-outlined">Outlined</a>
      <a class="button is-danger is-outlined">Outlined</a>
    </Sandbox>
    <Sandbox>
      <a className="button is-primary is-inverted">Inverted</a>
      <a className="button is-link is-inverted">Inverted</a>
      <a className="button is-info is-inverted">Inverted</a>
      <a className="button is-success is-inverted">Inverted</a>
      <a className="button is-danger is-inverted">Inverted</a>
    </Sandbox>
    <Sandbox>
      <a className="button is-primary is-inverted is-outlined">Invert Outlined</a>
      <a className="button is-link is-inverted is-outlined">Invert Outlined</a>
      <a className="button is-info is-inverted is-outlined">Invert Outlined</a>
      <a className="button is-success is-inverted is-outlined">Invert Outlined</a>
      <a className="button is-danger is-inverted is-outlined">Invert Outlined</a>
    </Sandbox>
  </div>
)

export default ButtonStylesOutlined
