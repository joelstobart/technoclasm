import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logoMark from '../images/t.svg'
import '../styles/header.css'

const Header = ({ siteTitle }) => (
    <header style={{
      position: `sticky`,
      background: `black`,
      padding: `1.5em 1.0875rem 2em`,
      top: 0,
      zIndex: 999,
    }}>
      <div style={{
        margin: `0 auto`,
        maxWidth: 960}}>

      <img
        src={logoMark}
        alt="Technoclasm T logo-mark"
        height="120rem"
        width="120rem"
        align="left"
        style={{paddingRight:`20px`}}
      />
      <h1 style={{ margin: 0, width: `600px`}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2>
        The Digital Transformation Consultancy
      </h2></div>
    </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
