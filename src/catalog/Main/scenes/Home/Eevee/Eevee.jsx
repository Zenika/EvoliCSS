import React from 'react'

import './Eevee.scss'

const Eevee = () => (
  <div>
    <div className="eevee">
      <div className="body">
        <div className="head">
          <div className="ears">
            <div className="ear">
              <div className="lobe" />
            </div>
            <div className="ear">
              <div className="lobe" />
            </div>
          </div>
          <div className="face">
            <div className="eyes">
              <div className="eye">
                <div className="eyelid" />
              </div>
              <div className="eye">
                <div className="eyelid" />
              </div>
            </div>
            <div className="nose" />
            <div className="mouth" />
          </div>
        </div>
        <div className="chest">
          <div className="fur">
            <div className="patch" />
          </div>
          <div className="fur">
            <div className="patch" />
          </div>
          <div className="fur">
            <div className="patch" />
          </div>
        </div>
        <div className="legs">
          <div className="leg">
            <div className="inner-leg" />
          </div>
          <div className="leg">
            <div className="inner-leg" />
          </div>
          <div className="leg">
            <div className="inner-leg" />
          </div>
          <div className="leg">
            <div className="inner-leg" />
          </div>
        </div>
        <div className="tail">
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail -end" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Eevee
