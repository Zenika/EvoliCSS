import React from 'react'
import Sandbox from 'catalog/components/Sandbox'

const AccordionIcon = () => (
  <div>
    <h3>Icon</h3>
    <Sandbox>
      <div className="accordions">
        <div className="accordion is-primary">
          <input className="accordion-input" type="checkbox" id="chck1" />
          <label className="accordion-label" htmlFor="chck1">
            Section 1
            <i className="fas fa-check" />
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
          </div>
        </div>
        <div className="accordion is-primary">
          <input className="accordion-input" type="checkbox" id="chck2" />
          <label className="accordion-label" htmlFor="chck2">
            Section 2
            <i className="far fa-hourglass" />
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default AccordionIcon
