import React from 'react'

const Figma = ({ nodeId }) => (
  <>
    <iframe
      id={'id-' + nodeId}
      title={nodeId}
      width="800"
      height="450"
      src={
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNTIGdJacxKH3DHRkomttIFv%2FEvoliCSS%3Fnode-id%3D' +
        nodeId
      }
    />
  </>
)

export default Figma
