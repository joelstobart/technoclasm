import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fe5a1d`,
      marginBottom: `3.45rem`,
      padding: `3.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0}}>
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
      <h2 style={{ margin: 0 , fontFamily: 'Quicksand, sans-serif', color: 'White'}}>
        A Digital Transformation Consultancy
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
