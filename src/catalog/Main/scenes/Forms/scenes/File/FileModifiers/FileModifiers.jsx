import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const FileModifiers = () => (
  <div>
    <h3>Modifiers</h3>
    <Sandbox>
      <div className="file has-name">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload" />
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
          <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="file has-name is-right">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload" />
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
          <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="file has-name is-fullwidth">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload" />
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
          <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="file is-boxed">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload" />
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="file has-name is-boxed">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload" />
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
          <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </label>
      </div>
    </Sandbox>
  </div>
)

export default FileModifiers
