import React from 'react'

const Iframe = ({ id, src }) => (
  <>
    <iframe id={'id-' + id} title={id} width="800" height="450" src={src} />
  </>
)

export default Iframe
