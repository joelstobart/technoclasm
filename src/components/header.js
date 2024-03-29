import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logoMark from "../images/t.svg"
import "../styles/header.css"

const Header = ({ siteTitle, pageTitle }) => (
  <header>
    <div>
      <img
        src={logoMark}
        alt="Technoclasm T logo-mark"
        height="100rem"
        width="100rem"
        align="left"
        style={{ paddingRight: `20px` }}
      />
      <h1 style={{ margin: 0, maxWidth: `600px` }}>
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
      <h2>{pageTitle || "The Digital Transformation Consultancy"}</h2>
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
