import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2>What we do</h2>
    <p>Technoclasm consult, design, facilitate and build outstanding digital solutions as part of digital transformations.
      We build user centric web applications and online cloud software.
      Our team have decades of experience in delivering outstanding web application.
      Our clients are from the Private Sector, Public Sector and the Third Sector.
    </p>
    <h2>Part of a community</h2>
    <p>
    As part of a vibrant and positive community, it is our responsibility to make a positive difference to the place we live. We can do this by:
    <ul><li>Providing employment opportunities</li><li>Doing work for local charities and businesses</li><li>Giving our time and money to projects that help build a stronger community</li></ul>
    </p>
    <h2>
      Sustainability
    </h2>
    <p>Our aim is to build a sustainable, and flourishing company in the heart of Exeter. We regard both our happiness and to the happiness of others.</p>

    <p>Now go build something great.</p>


    <h2>
      Fairtrade &amp; Living Wage
    </h2>
    <p>
    We proudly pay our staff, and our   contractors, more than the living wage. Likewise for us to live up-to our sustainability and community goals it is necessary for us to charge the professional rate for our services. We are a living wage employer, and promise to pay the living wage to anyone who works, contracts or helps us.
    </p>
        <StaticImage
      src="../images/exeter_quay_circle.jpg"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Exeter quay"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
