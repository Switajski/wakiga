import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

function createMarkup(htmlString) {
  return {__html: htmlString};
}

const Standort = () => {
  const data = useStaticQuery(graphql`
  query { 
    docx(name: {eq: "Standort"}) {
        content
    }
    placeholderImage: file(relativePath: { eq: "anfahrt_karte.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)
  
return(
  <Layout>
    <SEO title="Standort" />
      <h3>Anfahrt</h3>
      <div>
        <a href="https://graphhopper.com/maps/?point=49.897302%2C11.328063&point=49.894289%2C11.320188&point=49.89198%2C11.315317&point=49.890197%2C11.316513&point=49.889679%2C11.314384&locale=de-DE&vehicle=hike&weighting=fastest&elevation=true&turn_costs=false&use_miles=false&layer=OpenStreetMap"
          title="Klick -> Karte">
          <Img style={{ margin: "0 auto", maxWidth: 422 }}
            fluid={data.placeholderImage.childImageSharp.fluid}/></a>
      </div>
      <div>
        <p>Grün: Start in Wadendorf: von der Br&uuml;cke über die Wiesent ausgehend in Richtung Scherleithen</p>
        <p>1: Am Ortsausgang leicht links haltend (nicht in den Radweg rechts abbiegen), kurz weiter auf Straße und in den ersten Schotterweg rechts abbiegen</p>
        <p>2: Nun in den ersten Schotterweg links über das Feld abbiegen, erst an- dann absteigend dem Weg folgen</p>
        <p>3: Der Schotterweg führt nun nach rechts weiter</p>
        <p>Rot: Bis zum geschotterten Wendepunkt weiter: Geschafft!</p>
      </div>
      {/*<div dangerouslySetInnerHTML={createMarkup(data.docx.content)}></div>*/}
  </Layout>
)}

export default Standort