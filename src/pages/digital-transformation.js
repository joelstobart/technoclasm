import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PlantIcon from "../components/planticon"
import architecture from "../images/architecture.svg";
import development from "../images/development.svg";
import establishment from "../images/establishment.svg";
import reproduction from "../images/reproduction.svg";
import { Helmet } from "react-helmet";


const IndexPage = () => (

  <Layout pageTitle="Digital Transformation">
    <Seo title="Digital Transformation" />

    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://www.technoclasm.com",
          "logo": "https://www.technoclasm.com/images/t.svg"
        }
        `}
      </script>
    </Helmet>

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}>
      <h2 style={{paddingTop:`3.35rem`}}>How we enable digital transformation</h2>
      <p style={{paddingBottom:`3.35rem`}}>Technoclasm consult, design, facilitate and build outstanding digital transformation.
        Our role is to make digital transformations happen.
        Our team build user-centric web applications and online cloud software.
        Building upon decades of experience in delivering outstanding web application.
        Our clients are typically large organisations from the Private, Public and the Third Sectors.
      </p>
      <div id="icons">
        <PlantIcon altText="Establishment" title="Establishment" source={establishment}/>
        <PlantIcon altText="Architecture" title="Architecture" source={architecture}/>
        <PlantIcon altText="Development" title="Development" source={development}/>
        <PlantIcon altText="Reproduction" title="Reproduction" source={reproduction}/>
      </div>
    </div>



    <StaticImage
      src="../images/flowers.webp"
      quality={95}
      formats={["webp", "auto", "avif"]}
      alt="Flowers"
      style={{ height: "500px", width: "100%" }}
      objectFit="cover"
      objectPosition="center 60%"
    />





  </Layout>

)

export default IndexPage
