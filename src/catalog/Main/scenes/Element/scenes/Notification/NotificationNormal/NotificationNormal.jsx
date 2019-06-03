import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const NotificationNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <div className="notification">
        <button className="delete" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum
        rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{' '}
        <a href="https://github.com/Zenika/EvoliCSS">felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
    </Sandbox>
  </div>
)

export default NotificationNormal
