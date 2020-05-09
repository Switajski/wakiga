import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "Platz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

return(
  <Layout>
    <SEO title="Home" />
    <h2 style={{textAlign: "center"}}>Herzlich willkommen</h2>
    <p>Aufgrund der aktuellen gesetzlichen Bestimmungen (Sars-CoV-2 Pandemie), müssen wir den geplanten "Tag der offenen Tür" leider verschieben.
    </p>
    <p>Wir hoffen, dass wir den Betrieb in unserem nagelneuen Waldkindergarten in Plankenfels (Scherleithen) am 25.05.2020 für Eure Liebsten eröffnen können.</p>
    <div style={{ marginBottom: `10px` }}>
      <Img style={{ margin: "0 auto" }}
           fluid={data.placeholderImage.childImageSharp.fluid}/>
    </div>
  </Layout>
)}

export default IndexPage