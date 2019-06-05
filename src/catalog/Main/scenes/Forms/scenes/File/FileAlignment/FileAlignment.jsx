import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const FileSizes = () => (
  <div>
    <h3>Alignment</h3>
    <Sandbox>
      <div className="field">
        <div className="file is-centered is-boxed is-success has-name">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Centered file…</span>
            </span>
            <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
          </label>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field">
        <div className="file is-right is-info">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload" />
              </span>
              <span className="file-label">Right file…</span>
            </span>
            <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
          </label>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default FileSizes
