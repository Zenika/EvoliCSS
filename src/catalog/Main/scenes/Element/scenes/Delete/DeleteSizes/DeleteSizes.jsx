import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const DeleteSizes = () => (
  <div>
    <h3>Sizes</h3>
    <Sandbox>
      <button className="delete is-small" />
      <button className="delete" />
      <button className="delete is-medium" />
      <button className="delete is-large" />
    </Sandbox>
  </div>
)

export default DeleteSizes
