import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const FileNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <div class="file">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload" />
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
    </Sandbox>
  </div>
)

export default FileNormal
