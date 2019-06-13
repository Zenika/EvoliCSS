import React from 'react'
import Sandbox from 'catalog/components/Sandbox'
import cn from 'classnames'

const colors = ['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']

const AccordionBorder = () => (
  <div>
    <h3>Border</h3>
    <Sandbox>
      <div className="accordions">
        {colors.map(color => (
          <div
            key={color}
            className={cn('accordion', color !== 'default' ? 'is-border-' + color : 'is-border')}
          >
            <input type="checkbox" id={color} />
            <label className="accordion-label" htmlFor={color}>
              Border {color}
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

export default AccordionBorder
