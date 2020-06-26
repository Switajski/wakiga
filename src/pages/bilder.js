import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from '../components/layout'
import styled from "styled-components"

const StyledImage = styled(Img)`
  max-width: ${props => props.presentationWidth + "px"};
  max-height: 600px;
  margin: 0 auto;
`
const Bilder = () => {
    const data = useStaticQuery(graphql`
    query {
    juni: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "juni" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid (maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        } 
      }
    }
  }
  `)

    return (
        <Layout>
          <SEO title="Bilder" />
          <h3>Unsere Plankenfelser Wuselwiese</h3>
          <p>
            Hier bekommt Ihr einen Eindruck von unserer Wuselwiese mit Garderobe, großem Tippi, Buddelkasten und dem äußerst beliebten Matschplatz.
            Der Kindergarten wird von den Kindern selbst ausgestaltet und beständig erweitert.
          </p>
          <p>
            An unseren Matschplatz finden die Kinder viel Freude. 
            Es werden Staudämme gebaut, Matschsuppen gekocht und mit Töpfen, Kuchenformen und Schüsseln gespielt. 
            Jeden Tag wird etwas Neues gekocht und der Staudamm erweitert.</p>
          <p>Die Werkbank bietet den Kindern eine Möglichkeit für kreativen Bastelspaß.</p>
          {data.juni.edges.map(image => (
              <div key={image.node.base}>
                  <StyledImage presentationWidth={image.node.childImageSharp.fluid.presentationWidth} fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base.split(".")[0]} />
                  <br />
              </div>
          ))}
        </Layout>
    )
}

export default Bilder