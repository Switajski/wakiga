import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Downloads = () => {
  const data = useStaticQuery(graphql`
  query {
    konzept: file(relativePath: { eq: "Konzeption Wakiga Plankenfels.pdf" }) {
      publicURL
    }
  }
`)

return (<Layout>
    <SEO title="Downloads" />
    <h3>Downloads</h3>
    <p>Das Konzept des Waldkindergarten Plankenfels: <a href={data.konzept.publicURL} download>Konzept</a></p>
    <p>Absichtserklärung, Info-Broschüre / Flyer, Satzung des Vereins, Abholberechtigung findet 
      Ihr auf der Download-Seite des Vereins: <a href="http://www.waldkindergarten-wiesenttal.de/downloads.php">HIER ENTLANG</a>
    </p>
  </Layout>
)}

export default Downloads