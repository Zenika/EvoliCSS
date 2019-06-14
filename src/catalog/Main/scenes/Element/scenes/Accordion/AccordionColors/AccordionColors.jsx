import React from 'react'
import Sandbox from 'catalog/components/Sandbox'
import cn from 'classnames'

const colors = ['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']

const AccordionColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <div className="accordions">
        {colors.map(color => (
          <div key={color} className={cn('accordion', color !== 'default' ? 'is-' + color : null)}>
            <input type="checkbox" id={color} />
            <label className="accordion-label" htmlFor={color}>
              {color}
            </label>
            <div className="accordion-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
            </div>
          </div>
        ))}
      </div>
    </Sandbox>
  </div>
)

export default AccordionColors
