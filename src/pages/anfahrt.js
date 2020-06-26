import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { StyledDocx } from "../components/StyledComponents/styleddocx"
import styled from "styled-components"

const StyledImage = styled(Img)`
  margin: 0 auto;
  max-width: 422px;
`

const Anfahrt = () => {
  const data = useStaticQuery(graphql`
  query { 
    anfahrt: docx(name: {eq: "Anfahrt"}) {
      content
    }
    kontakt: docx(name: {eq: "Kontakt"}) {
      content
    }
    placeholderImage: file(relativePath: { eq: "anfahrt_karte.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 422, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)
  
return(
  <Layout>
    <SEO title="Anfahrt" />
    <StyledDocx htmlContent={data.kontakt.content} />
    <h3>Anfahrt</h3>
    <div>
      <a href="https://graphhopper.com/maps/?point=49.897302%2C11.328063&point=49.894289%2C11.320188&point=49.89198%2C11.315317&point=49.890197%2C11.316513&point=49.889679%2C11.314384&locale=de-DE&vehicle=hike&weighting=fastest&elevation=true&turn_costs=false&use_miles=false&layer=OpenStreetMap"
        title="Klick -> Karte">
        <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />
      </a>
    </div>
    <StyledDocx htmlContent={data.anfahrt.content} />
  </Layout>
)}

export default Anfahrt