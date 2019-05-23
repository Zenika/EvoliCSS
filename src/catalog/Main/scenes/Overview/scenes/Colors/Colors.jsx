import React from 'react'

const Colors = () => {
  const allColors = [
    ['Primary', '#b51432'],
    ['Link', '#12708c'],
    ['Info', '#5c95f7'],
    ['Success', '#0eb366'],
    ['Warning', '#ec951e'],
    ['Danger', '#ef1408'],
    ['Grey lighter', '#f2f2f2'],
    ['Grey light', '#d2d6d8'],
    ['Grey', '#b5b5b5'],
    ['Black light', '#4c4c4c'],
    ['Black', '#000000'],
    ['White', '#ffffff']
  ]
  return (
    <div>
      <h2>Colors</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name color</th>
            <th>Variable</th>
            <th>HEXA</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {allColors.map(([name, hexa]) => (
            <tr key={name.toLowerCase().replace(' ', '-')}>
              <td>{name}</td>
              <td>${name.toLowerCase().replace(' ', '-')}</td>
              <td>{hexa}</td>
              <td className={'is-' + name.toLowerCase().replace(' ', '-')} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Colors
