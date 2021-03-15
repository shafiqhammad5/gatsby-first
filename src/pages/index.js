import * as React from "react"
import AboutSection from "../components/aboutSection"
import ContactSection from "../components/contactSection"
import Hero from "../components/hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero 
      mainHeading="SaaS, WebApp and Software Landing Page"
      paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era."
    />

    <AboutSection />
    <ContactSection />

  </Layout>
)

export default IndexPage
