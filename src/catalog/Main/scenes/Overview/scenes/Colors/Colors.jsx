import React from 'react'

const Colors = () => (
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
        <tr>
          <td>Primary</td>
          <td>$primary</td>
          <td>#b51432</td>
          <td className="is-background-primary" />
        </tr>
        <tr>
          <td>Link</td>
          <td>$link</td>
          <td>#1495b5</td>
          <td className="is-background-link" />
        </tr>
        <tr>
          <td>Info</td>
          <td>$info</td>
          <td>#3779db</td>
          <td className="is-background-info" />
        </tr>
        <tr>
          <td>Success</td>
          <td>$success</td>
          <td>#14b564</td>
          <td className="is-background-success" />
        </tr>
        <tr>
          <td>Warning</td>
          <td>$warning</td>
          <td>#eb5d4a</td>
          <td className="is-background-warning" />
        </tr>
        <tr>
          <td>Danger</td>
          <td>$danger</td>
          <td>#f00808</td>
          <td className="is-background-danger" />
        </tr>
        <tr>
          <td>Grey lighter</td>
          <td>$grey-lighter</td>
          <td>#f2f2f2</td>
          <td className="is-background-grey-lighter" />
        </tr>
        <tr>
          <td>Grey light</td>
          <td>$grey-light</td>
          <td>#d2d6d8</td>
          <td className="is-background-grey-light" />
        </tr>
        <tr>
          <td>Grey</td>
          <td>$grey</td>
          <td>#b5b5b5</td>
          <td className="is-background-grey" />
        </tr>
        <tr>
          <td>Black light</td>
          <td>$black-light</td>
          <td>#4c4c4c</td>
          <td className="is-background-black-light" />
        </tr>
        <tr>
          <td>Black</td>
          <td>$black</td>
          <td>#000000</td>
          <td className="is-background-black" />
        </tr>
        <tr>
          <td>White</td>
          <td>$white</td>
          <td>#ffffff</td>
          <td className="is-background-white" />
        </tr>
      </tbody>
    </table>
  </div>
)
export default Colors
