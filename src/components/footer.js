import * as React from "react";

import { Link } from "gatsby"

const Footer = () => (
  <footer
    style={{
      paddingTop: `1rem`,
      backgroundColor: 'black',
      color: `white`
    }}>

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 0.2rem 0.1rem`,
        display: `flex`
      }}>

      <div style={{width:`45%`}}>

        <nav>
          <ul>
            <li><Link to="/digital-transformation">Digital Transformation</Link></li>

          </ul>
        </nav>

      </div>

      <div style={{width:`45%`}}>
        <div className="office">
          <h2>Exeter</h2>
          <address>
            The Gallery, Kings Wharf, The Quay, Exeter, EX2 4AN
          </address>
          <p className="email">
            <a style={{color:`white`, textDecoration:`none`}} href="mailto:we.are@technoclasm.com">we.are@technoclasm.com</a>
          </p>
        </div>
      </div>
    </div>

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 0.2rem 0.1rem`,
        textAlign: `center`
      }}>
      <span className="copyright">
        © {new Date().getFullYear()}&nbsp;
        <a style={{color:`white`, textDecoration:`none`}} href="https://technoclasm.com">Technoclasm Limited</a> - <Link className="footer" to="/modern-slavery">Modern Slavery Policy</Link>
      </span>
    </div>

  </footer>
)

export default Footer
