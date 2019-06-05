import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const FileColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <div className="field">
        <div className="file is-primary">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Primary file…</span>
            </span>
          </label>
        </div>
      </div>

      <div className="field">
        <div className="file is-info has-name">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Info file…</span>
            </span>
            <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
          </label>
        </div>
      </div>

      <div className="field">
        <div className="file is-warning is-boxed">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-cloud-upload-alt" />
              </span>
              <span className="file-label">Warning file…</span>
            </span>
          </label>
        </div>
      </div>

      <div className="field">
        <div className="file is-danger has-name is-boxed">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-cloud-upload-alt" />
              </span>
              <span className="file-label">Danger file…</span>
            </span>
            <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
          </label>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default FileColors
