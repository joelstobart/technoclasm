import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import architecture from "../images/architecture.svg";
import development from "../images/development.svg";
import establishment from "../images/establishment.svg";
import reproduction from "../images/reproduction.svg";


const IndexPage = () => (

  <Layout>

    <Seo title="Discover Technoclasm" />

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h2 style={{paddingTop:`3.35rem`}}>Our work</h2>
      <p style={{paddingBottom:`3.35rem`}}>Technoclasm consult, design, facilitate and build outstanding digital solutions as part of digital transformations.
        We build user centric web applications and online cloud software.
        Our team have decades of experience in delivering outstanding web application.
        Our clients are from the Private Sector, Public Sector and the Third Sector.
      </p>
      <div style={{ display: `flex`}}>

        <div style={{width:`25%`, textAlign:`center`}}>
        <img
          src={establishment}
          alt="Establishment"
          height="auto"
          width="80%"
          style={{
            textAlign: `center`}}
        />
          <h4>
            Establishment
          </h4>
        </div>
        <div style={{width:`25%`, textAlign:`center`}}>
        <img
          src={architecture}
          alt="Architecture"
          height="auto"
          width="80%"
        />
          <h4>
          Architecture
        </h4>
        </div>
        <div style={{width:`25%`, textAlign:`center`}}>
        <img
          src={development}
          alt="Development"
          height="auto"
          width="80%"
        />
          <h4>
          Development
        </h4>
        </div>
        <div style={{width:`25%`, textAlign:`center`}}>
        <img
          src={reproduction}
          alt="Reproduction"
          height="auto"
          width="80%"
        />
          <h4>
          Reproduction
        </h4>
        </div>
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
      Fairtrade &amp; Living Wage
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
