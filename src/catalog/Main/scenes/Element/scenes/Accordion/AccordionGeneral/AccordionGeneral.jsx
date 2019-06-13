import React from 'react'
import Sandbox from 'catalog/components/Sandbox'

const AccordionGeneral = () => (
  <div>
    <h3>General</h3>
    <h4>Multiple</h4>
    <Sandbox>
      <div className="accordions">
        <div className="accordion">
          <input type="checkbox" id="chck1" />
          <label className="accordion-label" for="chck1">
            Section 1
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
          </div>
        </div>
        <div className="accordion">
          <input type="checkbox" id="chck2" />
          <label className="accordion-label" for="chck2">
            Section 2
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
      </div>
    </Sandbox>
    <h4>Simple</h4>
    <Sandbox>
      <div className="accordions">
        <div className="accordion">
          <input type="radio" id="rd1" name="rd" />
          <label className="accordion-label" for="rd1">
            Section 1
          </label>
          <div className="accordion-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
          </div>
        </div>
        <div className="accordion">
          <input type="radio" id="rd2" name="rd" />
          <label className="accordion-label" for="rd2">
            Section 2
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
          </div>
        </div>
        <div className="accordion">
          <input type="radio" id="rd3" name="rd" />
          <label for="rd3" className="accordion-close">
            Close others &times;
          </label>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default AccordionGeneral
