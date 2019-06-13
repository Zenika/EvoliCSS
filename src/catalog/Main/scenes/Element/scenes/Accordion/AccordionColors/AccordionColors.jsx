import React from 'react'
import Sandbox from 'catalog/components/Sandbox'

const AccordionColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <div className="accordions">
        <div className="accordion">
          <input type="checkbox" id="default" />
          <label className="accordion-label" for="default">
            Default
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
          </div>
        </div>
        <div className="accordion is-primary">
          <input type="checkbox" id="primary" />
          <label className="accordion-label" for="primary">
            Primary
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
          </div>
        </div>
        <div className="accordion is-link">
          <input type="checkbox" id="link" />
          <label className="accordion-label" for="link">
            Link
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div className="accordion is-info">
          <input type="checkbox" id="info" />
          <label className="accordion-label" for="info">
            Info
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div className="accordion is-success">
          <input type="checkbox" id="success" />
          <label className="accordion-label" for="success">
            Success
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div className="accordion is-warning">
          <input type="checkbox" id="warning" />
          <label className="accordion-label" for="warning">
            Warning
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
        <div className="accordion is-danger">
          <input type="checkbox" id="danger" />
          <label className="accordion-label" for="danger">
            Danger
          </label>
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default AccordionColors
