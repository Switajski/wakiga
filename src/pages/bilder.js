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
    juli: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "juli" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid (maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        } 
      }
    }
    september: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "september" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid (maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        } 
      }
    }
    tdot: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "TagDerOffenenTuer171020" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid (maxWidth: 800, quality: 90) {
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
          <h3>Bilder vom Tag der offenen Tür am 17.10.2020</h3>
          <p>Die ersten Bilder von unserem Tag der offenen Tür am 17.10.2020.</p>
          {data.tdot.edges.map(image => (
              <div key={image.node.base}>
                  <StyledImage presentationWidth={image.node.childImageSharp.fluid.presentationWidth} fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base.split(".")[0]} />
                  <br />
              </div>
          ))}
          <p></p>
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
          {data.september.edges.map(image => (
              <div key={image.node.base}>
                  <StyledImage presentationWidth={image.node.childImageSharp.fluid.presentationWidth} fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base.split(".")[0]} />
                  <br />
              </div>
          ))}
          {data.juli.edges.map(image => (
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