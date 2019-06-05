import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const GeneralAddons = () => (
  <div>
    <h3>Addons</h3>
    <Sandbox>
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Find a repository" />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field has-addons">
        <p className="control">
          <input className="input" type="text" placeholder="Your email" />
        </p>
        <p className="control">
          <button className="button is-static">@gmail.com</button>
        </p>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field has-addons">
        <p className="control">
          <span className="select">
            <select>
              <option>$</option>
              <option>£</option>
              <option>€</option>
            </select>
          </span>
        </p>
        <p className="control">
          <input className="input" type="text" placeholder="Amount of money" />
        </p>
        <p className="control">
          <button className="button">Transfer</button>
        </p>
      </div>

      <div className="field has-addons">
        <p className="control">
          <span className="select">
            <select>
              <option>$</option>
              <option>£</option>
              <option>€</option>
            </select>
          </span>
        </p>
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="Amount of money" />
        </p>
        <p className="control">
          <button className="button">Transfer</button>
        </p>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field has-addons">
        <div className="control is-expanded">
          <div className="select is-fullwidth">
            <select name="country">
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Brazil">Brazil</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Guyana">Guyana</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Suriname">Suriname</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>
        </div>
        <div className="control">
          <button type="submit" className="button is-primary">
            Choose
          </button>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field has-addons has-addons-centered">
        <p className="control">
          <span className="select">
            <select>
              <option>$</option>
              <option>£</option>
              <option>€</option>
            </select>
          </span>
        </p>
        <p className="control">
          <input className="input" type="text" placeholder="Amount of money" />
        </p>
        <p className="control">
          <button className="button is-primary">Transfer</button>
        </p>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field has-addons has-addons-right">
        <p className="control">
          <span className="select">
            <select>
              <option>$</option>
              <option>£</option>
              <option>€</option>
            </select>
          </span>
        </p>
        <p className="control">
          <input className="input" type="text" placeholder="Amount of money" />
        </p>
        <p className="control">
          <button className="button is-primary">Transfer</button>
        </p>
      </div>
    </Sandbox>
  </div>
)

export default GeneralAddons
