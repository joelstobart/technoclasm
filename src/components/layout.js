/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main>
     {children}
      </main>
      <footer
        style={{
          paddingTop: `1rem`,
          backgroundColor: 'silver'
        }}
      ><div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.2rem 0.1rem`,
        }}
      ><h4>
        © {new Date().getFullYear()}&nbsp;
        <a style={{color:`black`, textDecoration:`none`}} href="https://technoclasm.com">Technoclasm Limited</a></h4></div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
