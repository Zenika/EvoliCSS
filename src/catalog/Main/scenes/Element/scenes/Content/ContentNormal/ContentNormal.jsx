import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ContentNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <div class="content">
        <ol type="1">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol type="A">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol type="a">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol type="I">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol type="i">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="content">
        <ol class="is-lower-alpha">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol class="is-lower-roman">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol class="is-upper-alpha">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol class="is-upper-roman">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </div>
    </Sandbox>
  </div>
)

export default ContentNormal
