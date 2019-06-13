import React from 'react'
import Sandbox from 'catalog/components/Sandbox'

const AccordionBorder = () => (
  <div>
    <h3>Border</h3>
    <Sandbox>
      <div className="accordions">
        <div className="accordion border">
          <input type="checkbox" id="border" />
          <label className="accordion-label" for="border">
            Border
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
          </div>
        </div>
        <div className="accordion border-is-primary">
          <input type="checkbox" id="border-primary" />
          <label className="accordion-label" for="border-primary">
            Border primary
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div className="accordion border-is-link">
          <input type="checkbox" id="border-link" />
          <label className="accordion-label" for="border-link">
            Border link
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div className="accordion border-is-info">
          <input type="checkbox" id="border-info" />
          <label className="accordion-label" for="border-info">
            Border info
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div className="accordion border-is-success">
          <input type="checkbox" id="border-success" />
          <label className="accordion-label" for="border-success">
            Border success
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div className="accordion border-is-warning">
          <input type="checkbox" id="border-warning" />
          <label className="accordion-label" for="border-warning">
            Border warning
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div className="accordion border-is-danger">
          <input type="checkbox" id="border-danger" />
          <label className="accordion-label" for="border-danger">
            Border danger
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default AccordionBorder
