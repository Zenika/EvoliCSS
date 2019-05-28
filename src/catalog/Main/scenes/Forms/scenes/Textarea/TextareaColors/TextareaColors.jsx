import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TextareaColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <div className="field">
        <div className="control">
          <textarea className="textarea is-primary" placeholder="Primary textarea" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea is-info" placeholder="Info textarea" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea is-success" placeholder="Success textarea" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea is-warning" placeholder="Warning textarea" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea is-danger" placeholder="Danger textarea" />
        </div>
      </div>
    </Sandbox>
  </div>
)

export default TextareaColors
