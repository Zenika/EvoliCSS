import React from 'react'

import './Figma.css'

const Figma = ({ nodeId }) => (
  <div>
    <iframe
      className="figma"
      id={'id-' + nodeId}
      title={nodeId}
      src={
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNTIGdJacxKH3DHRkomttIFv%2FEvoliCSS%3Fnode-id%3D' +
        nodeId
      }
    />
  </div>
)

export default Figma
