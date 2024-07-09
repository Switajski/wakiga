import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"
import Layout from '../components/layout'
import styled from "styled-components"

const StyledImageContainer = styled.div`
margin: 0 auto;
display: block;
max-width: 800px;
`
const StyledImage = styled(GatsbyImage)`
max-height: 600px;
margin: 0 auto;
display: block;
`
const Bilder = () => {
    const data = useStaticQuery(graphql`
    query {
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
            gatsbyImageData(
              layout: CONSTRAINED
              width: 800
              quality: 85
            )
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
            gatsbyImageData(
              layout: CONSTRAINED
              width: 800
              quality: 85
            )
          }
        } 
      }
    }
    sommerfest: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "Sommerfest2021" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 800
              quality: 85
            )
          }
        } 
      }
    }
  }
  `)

  return (
    <Layout>
      <h3>Bilder von unserem wunderschönen Sommerfest am 22.07.2021</h3>
      {data.sommerfest.edges.map(image => (
          <StyledImageContainer key={image.node.base}>
              <StyledImage image={image.node.childImageSharp.gatsbyImageData}
                  alt={image.node.base.split(".")[0]} />
              <p></p>
          </StyledImageContainer>
      ))}
      <p></p>
      <h3>Bilder vom Tag der offenen Tür am 17.10.2020</h3>
      {data.tdot.edges.map(image => (
          <StyledImageContainer key={image.node.base}>
              <StyledImage image={image.node.childImageSharp.gatsbyImageData}
                  alt={image.node.base.split(".")[0]} />
              <p></p>
          </StyledImageContainer>
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
          <StyledImageContainer key={image.node.base}>
              <StyledImage image={image.node.childImageSharp.gatsbyImageData}
                  alt={image.node.base.split(".")[0]} />
              <p></p>
          </StyledImageContainer>
      ))}
    </Layout>
  )
}

export default Bilder

export const Head = () => (
  <Seo title="Bilder" />
)