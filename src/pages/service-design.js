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

  <Layout pageTitle=" Service Design">
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
      <h2 style={{paddingTop:`3.35rem`}}>Our work</h2>
      <p style={{paddingBottom:`3.35rem`}}>Technoclasm consult, design, facilitate and build outstanding digital solutions.
        Our role is to make digital transformations happen.
        Our team build user centric web applications and online cloud software.
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
      src="../images/flower_yellow.webp"
      quality={95}
      formats={["webp", "auto", "avif"]}
      alt="Exeter quay"
      style={{ height: "500px", width: "100%" , marginBottom: "30px" }}
      objectFit="cover"
    />


    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h2 style={{paddingTop:`3.35rem`}}>Part of a community</h2>
      <p>
        As part of a vibrant and positive community, it is our responsibility to make a positive difference to the place we live. We can do this by:
      </p>
      <ul style={{paddingBottom:`3.35rem`}}><li>Providing employment opportunities</li><li>Doing work for local charities and businesses</li><li>Giving our time and money to projects that help build a stronger community</li></ul>

    </div>


    <StaticImage
      src="../images/flowers.webp"
      quality={95}
      formats={["webp", "auto", "avif"]}
      alt="Exeter quay"
      style={{ height: "500px", width: "100%" , marginBottom: "30px" }}
      objectFit="cover"
      objectPosition="center 30%"
    />


    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h2 style={{paddingTop:`3.35rem`}}>
        Sustainability
      </h2>
      <p style={{paddingBottom:`3.35rem`}}>Our aim is to build a sustainable, and flourishing company in the heart of Exeter. We regard both our happiness and to the happiness of others.</p>
    </div>

    <StaticImage
      src="../images/flower_yellow.webp"
      quality={95}
      formats={["webp", "auto", "avif"]}
      alt="Yellow Flowers"
      style={{ height: "500px", width: "100%" , marginBottom: "30px" }}
      objectFit="cover"
      objectPosition="center 60%"
    />

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h2 style={{paddingTop:`3.35rem`}}>
        Fair-trade &amp; Living Wage
      </h2>
      <p style={{paddingBottom:`3.35rem`}}>
        We proudly pay our staff, and our   contractors, more than the living wage. Likewise for us to live up-to our sustainability and community goals it is necessary for us to charge the professional rate for our services. We are a living wage employer, and promise to pay the living wage to anyone who works, contracts or helps us.
      </p>
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
