import React from 'react'
import Sandbox from 'catalog/components/Sandbox'

const AccordionButton = () => (
  <div>
    <h3>Button</h3>
    <Sandbox>
      <div className="accordions">
        <div className="accordion is-primary">
          <input type="checkbox" id="chck1" />
          <label className="accordion-label" for="chck1">
            Section 1<button className="button">Default</button>
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
          </div>
        </div>
        <div className="accordion is-primary">
          <input type="checkbox" id="chck2" />
          <label className="accordion-label" for="chck2">
            Section 2
            <button className="button" disabled>
              Default
            </button>
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default AccordionButton
