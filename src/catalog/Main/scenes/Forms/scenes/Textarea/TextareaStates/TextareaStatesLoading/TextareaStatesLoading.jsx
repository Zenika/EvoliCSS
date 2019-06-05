import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TextareaStatesLoading = () => (
  <div>
    <h3>Loading</h3>
    <Sandbox>
      <div className="control is-loading">
        <textarea className="textarea" placeholder="Loading textarea" />
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field">
        <div className="control is-small is-loading">
          <textarea className="textarea is-small" placeholder="Small loading textarea" />
        </div>
      </div>
      <div className="field">
        <div className="control is-loading">
          <textarea className="textarea" placeholder="Normal loading textarea" />
        </div>
      </div>
      <div className="field">
        <div className="control is-medium is-loading">
          <textarea className="textarea is-medium" placeholder="Medium loading textarea" />
        </div>
      </div>
      <div className="field">
        <div className="control is-large is-loading">
          <textarea className="textarea is-large" placeholder="Large loading textarea" />
        </div>
      </div>
    </Sandbox>
  </div>
)

export default TextareaStatesLoading
