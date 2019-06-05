import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TableModifiers = () => (
  <div>
    <h3>Modifiers</h3>
    <Sandbox>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>
              <abbr title="Position">One</abbr>
            </th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
        </tbody>
      </table>
    </Sandbox>
    <Sandbox>
      <table className="table is-striped">
        <thead>
          <tr>
            <th>
              <abbr title="Position">One</abbr>
            </th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
        </tbody>
      </table>
    </Sandbox>
    <Sandbox>
      <table className="table is-narrow">
        <thead>
          <tr>
            <th>
              <abbr title="Position">One</abbr>
            </th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
        </tbody>
      </table>
    </Sandbox>
    <Sandbox>
      <table className="table is-hoverable">
        <thead>
          <tr>
            <th>
              <abbr title="Position">One</abbr>
            </th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
        </tbody>
      </table>
    </Sandbox>
    <Sandbox>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="Position">One</abbr>
            </th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
        </tbody>
      </table>
    </Sandbox>
    <Sandbox>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="Position">One</abbr>
            </th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
        </tbody>
      </table>
    </Sandbox>
  </div>
)

export default TableModifiers
