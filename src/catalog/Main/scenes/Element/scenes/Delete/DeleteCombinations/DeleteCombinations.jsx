import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const DeleteCombinations = () => (
  <div>
    <h3>Combinations</h3>
    <Sandbox>
      <div className="block">
        <span className="tag is-success">
          Hello World
          <button className="delete is-small" />
        </span>
      </div>

      <div className="notification is-danger">
        <button className="delete" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </div>

      <article className="message is-info">
        <div className="message-header">
          Info
          <button className="delete" />
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus
          quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
          gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in
          mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula,
          id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </Sandbox>
  </div>
)

export default DeleteCombinations
