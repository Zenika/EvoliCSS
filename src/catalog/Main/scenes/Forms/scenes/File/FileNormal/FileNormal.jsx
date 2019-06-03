import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const FileNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <div className="file">
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
  </div>
)

export default FileNormal
