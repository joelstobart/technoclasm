import * as React from "react";

const Footer = ({}) => (
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
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
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
      <h4 className="copyright">
        © {new Date().getFullYear()}&nbsp;
        <a style={{color:`white`, textDecoration:`none`}} href="https://technoclasm.com">Technoclasm Limited</a>
      </h4>
    </div>

  </footer>
)

export default Footer
