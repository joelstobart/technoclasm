import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logoMark from '../images/t.svg'
import flowers from '../images/flowers.webp'
import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `3.45rem`,
      padding: `7.7rem 0 7.7rem 0` ,
      background: `url(${flowers})`,
      backgroundPosition:`cover`,
      backgroundSize: `100%`,
      }}>
    <div>
      <img
        src={logoMark}
        alt="Technoclasm T logo-mark"
        height="120rem"
        width="170rem"
        align="left"
        style={{paddingRight:`50px`}}
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
