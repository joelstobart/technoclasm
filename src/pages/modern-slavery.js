import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet";


const IndexPage = () => (

  <Layout pageTitle="Modern Slavery Policy">
    <Seo title="Modern Slavery Policy" />

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
      <h2 style={{paddingTop:`3.35rem`}}>Our committed to the prevention of slavery and human trafficking</h2>
      <p style={{paddingBottom:`3.35rem`}}>At Technoclasm we conduct our business with integrity,
        transparency and fairness. We are committed to the prevention of slavery and human trafficking
        in our business and in our supply chains. We procure goods and services in a sustainable and
        ethical manner in compliance with our values and relevant law and policy, including the
        Modern Slavery Act 2015.
        We do not accept slavery or human trafficking in our business and we will not work with
        others in our supply chain who do not share our commitment to preventing slavery and human trafficking.
        If you wish to see our Anti-Slavery Policy, please ask us. If you have any concerns
        or suspicions please contact us.
      </p>

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
      <h2 style={{paddingTop:`3.35rem`}}>Our business and supply chains</h2>
      <p>
        Our supply chains include providers of services to our clients, and providers of
        goods and services to our firm. For example, we engage technical specialists, experts and
        consultancy companies on behalf of our clients. Goods and services provided to the firm include
        banking services, stationery supplies, building management services for our
        offices, taxis, cleaning services, IT hardware and IT services.
      </p>

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
      <h2 style={{paddingTop:`3.35rem`}}>Our compliance</h2>

      <p style={{paddingBottom:`3.35rem`}}>
        <ul>
          <li>We reviewed our compliance approach in line with the 2017 UK Government guidance on Transparency in Supply Chains,
            the 2019 UK Government guidance on modern slavery statements. </li>
        <li>We conducted a slavery and human trafficking risk assessment of our business and our supply chains and
          issued a slavery and human trafficking risk questionnaire to selected suppliers</li>
        <li>We reviewed and updated our supplier take-on processes to ensure our slavery and human trafficking risk questionnaire is issued where appropriate to new or prospective suppliers
          held discussions at a senior level within the firm to ensure compliance</li>
          <li>We reviewed our Anti-slavery Policy, which identifies the firm's Managing Director as the Anti-slavery Compliance Officer with overall responsibility for implementing this Policy</li>
        <li>We arranged for colleagues with direct responsibilities for engaging with suppliers to undertake relevant anti-slavery and human trafficking training
        </li>
        </ul>
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
